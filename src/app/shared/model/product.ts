export interface Iproduct {
    _id: string
    title: string
    product_description: Array<string>
    rating: number
    reviews_count: number
    images: Array<string>
    tags: Array<string>
    product_details: string
    return_policy: any
    total_price: string
    product_specifications: Array<{
      _id: string
      specification_name: string
      specification_value: string
    }>
    category: string
    subcategory: string
  }