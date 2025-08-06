// User action tracking utilities
export class FootprintTracker {
	constructor(templateId) {
		this.templateId = templateId;
		this.storageKey = `user_footprints_${templateId}`;
		this.loadFootprints();
	}

	// Load existing footprints from localStorage
	loadFootprints() {
		try {
			const stored = localStorage.getItem(this.storageKey);
			this.footprints = stored ? JSON.parse(stored) : [];
		} catch (error) {
			console.error("Error loading footprints:", error);
			this.footprints = [];
		}
	}

	// Save footprints to localStorage
	saveFootprints() {
		try {
			localStorage.setItem(this.storageKey, JSON.stringify(this.footprints));
		} catch (error) {
			console.error("Error saving footprints:", error);
		}
	}

	// Track a user action
	track(action, details = {}) {
		const footprint = {
			id: Date.now() + Math.random(),
			action,
			details,
			timestamp: new Date().toISOString(),
			sessionId: this.getSessionId(),
		};

		this.footprints.push(footprint);
		this.saveFootprints();

		// Keep only last 100 actions to prevent excessive storage
		if (this.footprints.length > 100) {
			this.footprints = this.footprints.slice(-100);
			this.saveFootprints();
		}

		return footprint;
	}

	// Get or create session ID
	getSessionId() {
		const sessionKey = `session_${this.templateId}`;
		let sessionId = sessionStorage.getItem(sessionKey);

		if (!sessionId) {
			sessionId = `session_${Date.now()}_${Math.random()
				.toString(36)
				.substr(2, 9)}`;
			sessionStorage.setItem(sessionKey, sessionId);
		}

		return sessionId;
	}

	// Get all footprints
	getAllFootprints() {
		return [...this.footprints].reverse(); // Most recent first
	}

	// Get all actions (alias for getAllFootprints for compatibility)
	getActions() {
		return this.getAllFootprints().map((footprint) => ({
			type: footprint.action,
			data: footprint.details,
			timestamp: footprint.timestamp,
			sessionId: footprint.sessionId,
		}));
	}

	// Get footprints by action type
	getFootprintsByAction(action) {
		return this.footprints.filter((fp) => fp.action === action);
	}

	// Get footprints for a specific section
	getFootprintsBySection(sectionId) {
		return this.footprints.filter((fp) => fp.details.sectionId === sectionId);
	}

	// Get recent footprints (last N actions)
	getRecentFootprints(count = 10) {
		return this.getAllFootprints().slice(0, count);
	}

	// Get footprints summary for sharing
	getSummary() {
		const sections = {};
		const actions = {};

		this.footprints.forEach((fp) => {
			// Count by action type
			actions[fp.action] = (actions[fp.action] || 0) + 1;

			// Count by section
			if (fp.details.sectionId) {
				if (!sections[fp.details.sectionId]) {
					sections[fp.details.sectionId] = {
						edits: 0,
						deletes: 0,
						restores: 0,
						lastModified: null,
					};
				}

				if (fp.action === "section_edit") {
					sections[fp.details.sectionId].edits++;
				} else if (fp.action === "section_delete") {
					sections[fp.details.sectionId].deletes++;
				} else if (fp.action === "section_restore") {
					sections[fp.details.sectionId].restores++;
				}

				sections[fp.details.sectionId].lastModified = fp.timestamp;
			}
		});

		return {
			totalActions: this.footprints.length,
			sections,
			actions,
			firstAction: this.footprints[0]?.timestamp,
			lastAction: this.footprints[this.footprints.length - 1]?.timestamp,
			sessionId: this.getSessionId(),
		};
	}

	// Clear all footprints
	clear() {
		this.footprints = [];
		localStorage.removeItem(this.storageKey);
	}

	// Format timestamp for display
	static formatTimestamp(timestamp) {
		const date = new Date(timestamp);
		const now = new Date();
		const diffMs = now - date;
		const diffMins = Math.floor(diffMs / 60000);
		const diffHours = Math.floor(diffMs / 3600000);
		const diffDays = Math.floor(diffMs / 86400000);

		if (diffMins < 1) return "Just now";
		if (diffMins < 60) return `${diffMins}m ago`;
		if (diffHours < 24) return `${diffHours}h ago`;
		if (diffDays < 7) return `${diffDays}d ago`;

		return date.toLocaleDateString();
	}

	// Get action icon
	static getActionIcon(action) {
		const icons = {
			section_edit: "✏️",
			section_delete: "🗑️",
			section_restore: "↩️",
			form_update: "📝",
			color_change: "🎨",
			template_select: "📄",
			build_request: "🚀",
			whatsapp_share: "📱",
			link_copy: "🔗",
			preview_open: "👁️",
		};
		return icons[action] || "⚡";
	}

	// Get action description
	static getActionDescription(action, details) {
		const descriptions = {
			section_edit: `Edited ${details.sectionId || "section"}`,
			section_delete: `Deleted ${details.sectionId || "section"}`,
			section_restore: `Restored ${details.sectionId || "section"}`,
			form_update: `Updated ${details.field || "form field"}`,
			color_change: `Changed brand color to ${details.newColor || "new color"}`,
			template_select: `Selected ${details.templateName || "template"}`,
			build_request: "Requested website build",
			whatsapp_share: "Shared via WhatsApp",
			link_copy: "Copied shareable link",
			preview_open: "Opened preview",
		};
		return descriptions[action] || `Performed ${action}`;
	}
}

// Action types constants
export const FOOTPRINT_ACTIONS = {
	SECTION_EDIT: "section_edit",
	SECTION_DELETE: "section_delete",
	SECTION_RESTORE: "section_restore",
	FORM_UPDATE: "form_update",
	COLOR_CHANGE: "color_change",
	TEMPLATE_SELECT: "template_select",
	BUILD_REQUEST: "build_request",
	WHATSAPP_SHARE: "whatsapp_share",
	LINK_COPY: "link_copy",
	PREVIEW_OPEN: "preview_open",
};

export default FootprintTracker;
