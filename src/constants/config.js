// Business configuration constants
export const BUSINESS_CONFIG = {
	WHATSAPP_NUMBER: "94764067093",
	EMAIL: "info@templatehub.com",
	COMPANY_NAME: "Template Hub",
};

// WhatsApp message templates
export const WHATSAPP_TEMPLATES = {
	BUILD_REQUEST: (
		data
	) => `Hello! I'd like to request a website build with the following details:

📋 **Build Request Summary**
• Template: ${data.templateName}
• Site Name: ${data.siteName}
• Contact: ${data.contactName} (${data.contactEmail})
• Brand Color: ${data.brandColor}
• Section Edits: ${data.sectionEdits} sections modified

${
	data.userActions
		? `👣 **User Activity Summary**
• Total Actions: ${data.userActions.totalActions || 0}
• Content Edits: ${data.userActions.edits || 0}
• Sections Deleted: ${data.userActions.deletes || 0}
• Items Restored: ${data.userActions.restores || 0}
• Modified Sections: ${data.userActions.sectionsModified || 0}

`
		: ""
}${
		data.additionalNotes
			? `📝 **Additional Notes:**
${data.additionalNotes}

`
			: ""
	}🔗 **Design Preview:** ${data.shareableLink}

Please contact me to discuss the next steps for building my website.

Thank you!`,
};
