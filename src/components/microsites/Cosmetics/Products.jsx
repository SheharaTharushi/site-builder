import React, { useState } from "react";
import Navigation from "./Navigation";
import CosmeticProductGallery from "../../templates/gallery/CosmeticProductGallery";
import FooterSimple from "../../templates/footer/FooterSimple";
import { motion } from "framer-motion";

const Products = ({ isBuilder = false }) => {
  const [editingProduct, setEditingProduct] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Rose Glow Serum",
      category: "Serums",
      description: "Hydrating facial serum with rose extract",
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80",
      price: "$45.00",
    },
    {
      id: 2,
      title: "Natural Clay Mask",
      category: "Masks",
      description: "Purifying mask with kaolin clay and botanical extracts",
      image:
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80",
      price: "$35.00",
    },
    {
      id: 3,
      title: "Vitamin C Brightening Cream",
      category: "Moisturizers",
      description: "Illuminating moisturizer with stable vitamin C",
      image:
        "https://images.unsplash.com/photo-1570194065650-d99fb4b8271e?auto=format&fit=crop&q=80",
      price: "$52.00",
    },
    {
      id: 4,
      title: "Hyaluronic Acid Serum",
      category: "Serums",
      description: "Deep hydration serum for plump, dewy skin",
      image:
        "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80",
      price: "$48.00",
    },
    {
      id: 5,
      title: "Green Tea Toner",
      category: "Toners",
      description: "Refreshing toner with antioxidant properties",
      image:
        "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80",
      price: "$28.00",
    },
    {
      id: 6,
      title: "Collagen Night Cream",
      category: "Moisturizers",
      description: "Rich night cream for skin regeneration",
      image:
        "https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&q=80",
      price: "$56.00",
    },
    {
      id: 7,
      title: "Retinol Complex",
      category: "Serums",
      description: "Anti-aging serum with stabilized retinol",
      image:
        "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80",
      price: "$65.00",
    },
    {
      id: 8,
      title: "Bamboo Face Scrub",
      category: "Exfoliators",
      description: "Gentle exfoliating scrub with bamboo particles",
      image:
        "https://images.unsplash.com/photo-1608248628001-70c45652b325?auto=format&fit=crop&q=80",
      price: "$32.00",
    },
    {
      id: 9,
      title: "Peptide Eye Cream",
      category: "Eye Care",
      description: "Advanced eye cream with peptides and caffeine",
      image:
        "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80",
      price: "$42.00",
    },
    {
      id: 10,
      title: "Vitamin E Oil",
      category: "Oils",
      description: "Pure vitamin E oil for deep nourishment",
      image:
        "https://images.unsplash.com/photo-1598662957563-ee4965d4d72c?auto=format&fit=crop&q=80",
      price: "$38.00",
    },
    {
      id: 11,
      title: "Aloe Gel Moisturizer",
      category: "Moisturizers",
      description: "Light moisturizer with soothing aloe vera",
      image:
        "https://images.unsplash.com/photo-1611070016353-285810b55f81?auto=format&fit=crop&q=80",
      price: "$34.00",
    },
    {
      id: 12,
      title: "CBD Face Oil",
      category: "Oils",
      description: "Calming face oil with CBD and essential oils",
      image:
        "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80",
      price: "$58.00",
    },
  ]);

  // Get unique categories from products
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ].sort();

  // Event Handlers
  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleDelete = (productId) => {
    setDeleteConfirm(productId);
  };

  const confirmDelete = () => {
    if (deleteConfirm) {
      setProducts(products.filter((p) => p.id !== deleteConfirm));
      setDeleteConfirm(null);
    }
  };

  // Product Card Component
  const ProductCard = ({ item, isBuilder }) => (
    <div className="relative bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group">
      {/* Admin Controls - Only show in builder mode */}
      {isBuilder && (
        <div className="absolute top-2 right-2 z-50 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => handleEdit(item)}
            className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 shadow-sm transition-colors"
            title="Edit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </button>
          <button
            onClick={() => handleDelete(item.id)}
            className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 shadow-sm transition-colors"
            title="Delete"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-full px-4 py-2 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors">
            Quick View
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="mb-3">
          <p className="text-sm text-rose-600 font-medium mb-1">
            {item.category}
          </p>
          <h3 className="text-lg font-medium text-gray-900 line-clamp-1">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm mt-1 line-clamp-2">
            {item.description}
          </p>
        </div>

        {/* Price and Actions */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-xl font-semibold text-gray-900">
              {item.price}
            </span>
            <span className="text-sm text-gray-500">In Stock</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button className="px-4 py-2 bg-rose-50 text-rose-600 rounded-full hover:bg-rose-100 transition-colors text-sm font-medium">
              Add to Cart
            </button>
            <button className="px-4 py-2 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-colors text-sm font-medium">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const handleSave = (e) => {
    e.preventDefault();
    const updatedProducts = products.map((p) => {
      if (p.id === editingProduct.id) {
        return editingProduct;
      }
      return p;
    });
    setProducts(updatedProducts);
    setEditingProduct(null);
  };

  // Main render
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation />
      <div className="max-w-[1920px] mx-auto">
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-light text-gray-900 mb-4">
              Our Products
            </h1>
            <p className="text-lg text-gray-600">
              Discover our complete range of natural beauty products
            </p>
          </div>

          {/* Product Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <CosmeticProductGallery
              items={products}
              categories={categories}
              renderItem={(item) => (
                <ProductCard item={item} isBuilder={isBuilder} />
              )}
            />
          </motion.div>
        </div>

        <FooterSimple
          companyName="Beauty & Care"
          year={new Date().getFullYear()}
        />
      </div>

      {/* Edit Modal */}
      {editingProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4">Edit Product</h2>
            <form onSubmit={handleSave}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <input
                    type="text"
                    value={editingProduct.title}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        title: e.target.value,
                      })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <input
                    type="text"
                    value={editingProduct.category}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        category: e.target.value,
                      })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    value={editingProduct.description}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        description: e.target.value,
                      })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    rows="3"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Image URL
                  </label>
                  <input
                    type="text"
                    value={editingProduct.image}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        image: e.target.value,
                      })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Price
                  </label>
                  <input
                    type="text"
                    value={editingProduct.price}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        price: e.target.value,
                      })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingProduct(null)}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-sm">
            <h2 className="text-xl font-semibold mb-4">Delete Product</h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this product? This action cannot
              be undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
