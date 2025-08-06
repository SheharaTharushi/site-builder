import React from "react";
import Navigation from "./Navigation";
import BeautyHero from "../../templates/hero/BeautyHero";
import FeaturesAlternating from "../../templates/features/FeaturesAlternating";
import BeautyProductCarousel from "../../templates/gallery/BeautyProductCarousel";
import TestimonialSimple from "../../templates/testimonial/TestimonialSimple";
import FooterSimple from "../../templates/footer/FooterSimple";
import HeroSectionEditor from "../../layout/HeroSectionEditor";
import AdvancedSectionEditor from "../../layout/AdvancedSectionEditor";
import { motion } from "framer-motion";
import siteConfig from "./siteConfig";

const Home = ({
  customData = {},
  sectionEdits = {},
  onSectionEdit = () => {},
  onSectionDelete = () => {},
  onSectionRestore = () => {},
  deletedSections = [],
  isBuilder = false,
}) => {
  // Use default content from siteConfig
  const { defaultContent } = siteConfig;

  // Helper function to check if a section is deleted
  const isDeleted = (sectionId) => {
    return (
      Array.isArray(deletedSections) && deletedSections.includes(sectionId)
    );
  };

  // Custom render function for hero section
  const renderHeroSection = () => {
    if (isDeleted("hero")) {
      return (
        <div className="relative py-20">
          <div className="absolute top-4 right-4 z-50">
            <HeroSectionEditor
              sectionId="hero"
              sectionName="Hero Section"
              initialContent={defaultContent.hero}
              onSave={onSectionEdit}
              onDelete={onSectionDelete}
              onRestore={() => onSectionRestore("hero")}
              isDeleted={true}
            />
          </div>
        </div>
      );
    }

    const content = sectionEdits?.hero || defaultContent.hero;

    return (
      <div className="relative mt-16">
        {isBuilder && (
          <div className="absolute top-4 right-4 z-50">
            <HeroSectionEditor
              sectionId="hero"
              sectionName="Hero Section"
              initialContent={content}
              onSave={onSectionEdit}
              onDelete={() => onSectionDelete("hero")}
              onRestore={() => onSectionRestore("hero")}
              isDeleted={false}
              editFields={[
                { key: "title", label: "Title", type: "text" },
                { key: "subtitle", label: "Subtitle", type: "text" },
                { key: "description", label: "Description", type: "textarea" },
                {
                  key: "imageSrc",
                  label: "Background Image URL",
                  type: "image",
                },
                { key: "imageAlt", label: "Image Alt Text", type: "text" },
                {
                  key: "primaryButtonText",
                  label: "Primary Button Text",
                  type: "text",
                },
                {
                  key: "primaryButtonLink",
                  label: "Primary Button Link",
                  type: "text",
                },
                {
                  key: "secondaryButtonText",
                  label: "Secondary Button Text",
                  type: "text",
                },
                {
                  key: "secondaryButtonLink",
                  label: "Secondary Button Link",
                  type: "text",
                },
              ]}
            />
          </div>
        )}
        <BeautyHero {...content} />
      </div>
    );
  };

  // Custom render function for features section
  const renderFeaturesSection = () => {
    if (isDeleted("features")) {
      return (
        <div className="relative py-20">
          <div className="absolute top-4 right-4 z-50">
            <AdvancedSectionEditor
              sectionId="features"
              sectionName="Why Choose Us Section"
              initialContent={defaultContent.features}
              onSave={onSectionEdit}
              onDelete={onSectionDelete}
              onRestore={() => onSectionRestore("features")}
              isDeleted={true}
            />
          </div>
        </div>
      );
    }

    const content = sectionEdits?.features || defaultContent.features;

    return (
      <div className="relative mt-16">
        {isBuilder && (
          <div className="absolute top-4 right-4 z-50">
            <AdvancedSectionEditor
              sectionId="features"
              sectionName="Why Choose Us Section"
              initialContent={content}
              onSave={onSectionEdit}
              onDelete={() => onSectionDelete("features")}
              onRestore={() => onSectionRestore("features")}
              isDeleted={false}
              editFields={[
                { key: "title", label: "Section Title", type: "text" },
                { key: "subtitle", label: "Section Subtitle", type: "text" },
                {
                  key: "features",
                  label: "Features",
                  type: "array",
                  itemFields: [
                    { key: "title", label: "Feature Title", type: "text" },
                    {
                      key: "description",
                      label: "Feature Description",
                      type: "textarea",
                    },
                    {
                      key: "icon",
                      label: "Feature Icon",
                      type: "text",
                      placeholder: "Enter an emoji or icon",
                    },
                    { key: "image", label: "Feature Image", type: "image" },
                  ],
                  addItemLabel: "Add New Feature",
                  maxItems: 6,
                },
              ]}
            />
          </div>
        )}
        <FeaturesAlternating {...content} />
      </div>
    );
  };

  // Custom render function for products section
  const renderProductsSection = () => {
    if (isDeleted("products")) {
      return (
        <div className="relative py-20">
          <div className="absolute top-4 right-4 z-50">
            <AdvancedSectionEditor
              sectionId="products"
              sectionName="Product Gallery"
              initialContent={defaultContent.products}
              onSave={onSectionEdit}
              onDelete={onSectionDelete}
              onRestore={() => onSectionRestore("products")}
              isDeleted={true}
            />
          </div>
        </div>
      );
    }

    const content = sectionEdits?.products || defaultContent.products;

    return (
      <div className="relative mt-16">
        {isBuilder && (
          <div className="absolute top-4 right-4 z-50">
            <AdvancedSectionEditor
              sectionId="products"
              sectionName="Product Gallery"
              initialContent={content}
              onSave={onSectionEdit}
              onDelete={() => onSectionDelete("products")}
              onRestore={() => onSectionRestore("products")}
              isDeleted={false}
              editFields={[
                { key: "title", label: "Title", type: "text" },
                { key: "subtitle", label: "Subtitle", type: "text" },
                {
                  key: "products",
                  label: "Products",
                  type: "array",
                  itemFields: [
                    { key: "image", label: "Image", type: "image" },
                    { key: "caption", label: "Caption", type: "text" },
                    { key: "alt", label: "Alt Text", type: "textarea" },
                    { key: "price", label: "Price", type: "text" },
                    {
                      key: "description",
                      label: "Description",
                      type: "textarea",
                    },
                  ],
                  addItemLabel: "Add New Product",
                  maxItems: 12,
                },
              ]}
            />
          </div>
        )}
        <BeautyProductCarousel {...content} />
      </div>
    );
  };

  // Custom render function for testimonials section
  const renderTestimonialsSection = () => {
    if (isDeleted("testimonials")) {
      return (
        <div className="relative py-20">
          <div className="absolute top-4 right-4 z-50">
            <AdvancedSectionEditor
              sectionId="testimonials"
              sectionName="Testimonials Section"
              initialContent={defaultContent.testimonials}
              onSave={onSectionEdit}
              onDelete={onSectionDelete}
              onRestore={() => onSectionRestore("testimonials")}
              isDeleted={true}
            />
          </div>
        </div>
      );
    }

    const content = sectionEdits?.testimonials || defaultContent.testimonials;

    return (
      <div className="relative mt-16">
        {isBuilder && (
          <div className="absolute top-4 right-4 z-50">
            <AdvancedSectionEditor
              sectionId="testimonials"
              sectionName="Testimonials Section"
              initialContent={content}
              onSave={onSectionEdit}
              onDelete={() => onSectionDelete("testimonials")}
              onRestore={() => onSectionRestore("testimonials")}
              isDeleted={false}
              editFields={[
                { key: "title", label: "Title", type: "text" },
                { key: "subtitle", label: "Subtitle", type: "text" },
                {
                  key: "testimonials",
                  label: "Testimonials",
                  type: "array",
                  itemFields: [
                    { key: "image", label: "Person Image", type: "image" },
                    {
                      key: "quote",
                      label: "Testimonial Quote",
                      type: "textarea",
                    },
                    { key: "author", label: "Author Name", type: "text" },
                    { key: "role", label: "Author Role/Title", type: "text" },
                  ],
                  addItemLabel: "Add New Testimonial",
                  maxItems: 6,
                },
              ]}
            />
          </div>
        )}
        <TestimonialSimple {...content} />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation />
      <div className="space-y-16">
        <div className="pt-16">{renderHeroSection()}</div>
        {renderFeaturesSection()}
        {renderProductsSection()}
        {renderTestimonialsSection()}
        <FooterSimple />
      </div>
    </div>
  );
};

export default Home;
