/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export type CartItems =
  | {
      product?: (string | null) | Product;
      quantity?: number | null;
      id?: string | null;
    }[]
  | null;

export interface Config {
  collections: {
    pages: Page;
    products: Product;
    categories: Category;
    colors: Color;
    orders: Order;
    media: Media;
    users: User;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {
    footer: Footer;
  };
}
export interface Page {
  id: string;
  title: string;
  publishedOn?: string | null;
  hero: {
    type: 'none' | 'highImpact' | 'mediumImpact' | 'lowImpact' | 'customHero';
    richText?:
      | {
          [k: string]: unknown;
        }[]
      | null;
    links?:
      | {
          link: {
            type?: ('reference' | 'custom') | null;
            newTab?: boolean | null;
            reference?: {
              relationTo: 'pages';
              value: string | Page;
            } | null;
            url?: string | null;
            label: string;
            icon?: string | Media | null;
            appearance?: ('default' | 'primary' | 'secondary') | null;
          };
          id?: string | null;
        }[]
      | null;
    medias?:
      | {
          media?: string | Media | null;
          id?: string | null;
        }[]
      | null;
    media?: string | Media | null;
  };
  layout: (
    | {
        invertBackground?: boolean | null;
        richText: {
          [k: string]: unknown;
        }[];
        links?:
          | {
              link: {
                type?: ('reference' | 'custom') | null;
                newTab?: boolean | null;
                reference?: {
                  relationTo: 'pages';
                  value: string | Page;
                } | null;
                url?: string | null;
                label: string;
                icon?: string | Media | null;
                appearance?: ('primary' | 'secondary') | null;
              };
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'cta';
      }
    | {
        invertBackground?: boolean | null;
        columns?:
          | {
              size?: ('oneThird' | 'half' | 'twoThirds' | 'full') | null;
              richText: {
                [k: string]: unknown;
              }[];
              enableLink?: boolean | null;
              link?: {
                type?: ('reference' | 'custom') | null;
                newTab?: boolean | null;
                reference?: {
                  relationTo: 'pages';
                  value: string | Page;
                } | null;
                url?: string | null;
                label: string;
                icon?: string | Media | null;
                appearance?: ('default' | 'primary' | 'secondary') | null;
              };
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'content';
      }
    | {
        invertBackground?: boolean | null;
        position?: ('default' | 'fullscreen') | null;
        media: string | Media;
        id?: string | null;
        blockName?: string | null;
        blockType: 'mediaBlock';
      }
    | {
        introContent: {
          [k: string]: unknown;
        }[];
        populateBy?: ('collection' | 'selection') | null;
        relationTo?: 'products' | null;
        categories?: (string | Category)[] | null;
        limit?: number | null;
        selectedDocs?:
          | {
              relationTo: 'products';
              value: string | Product;
            }[]
          | null;
        populatedDocs?:
          | {
              relationTo: 'products';
              value: string | Product;
            }[]
          | null;
        populatedDocsTotal?: number | null;
        new?: boolean | null;
        hot?: boolean | null;
        sale?: boolean | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'archive';
      }
  )[];
  slug?: string | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
export interface Media {
  id: string;
  alt: string;
  caption?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
}
export interface Category {
  id: string;
  title: string;
  subtitle: string;
  category?: string | null;
  slug?: string | null;
  updatedAt: string;
  createdAt: string;
}
export interface Product {
  id: string;
  title: string;
  colors?: (string | Color)[] | null;
  sizes?: ('GG' | 'G' | 'M' | 'P' | 'PP')[] | null;
  description: string;
  price: number;
  discountPercentage?: number | null;
  photos?:
    | {
        photo?: string | Media | null;
        id?: string | null;
      }[]
    | null;
  publishedOn?: string | null;
  relatedProducts?: (string | Product)[] | null;
  categories?: (string | Category)[] | null;
  new?: boolean | null;
  sale?: boolean | null;
  hot?: boolean | null;
  slug?: string | null;
  updatedAt: string;
  createdAt: string;
}
export interface Color {
  id: string;
  color: string;
  colorHex: string;
  slug?: string | null;
  updatedAt: string;
  createdAt: string;
}
export interface Order {
  id: string;
  orderedBy?: (string | null) | User;
  total: number;
  items?:
    | {
        product: string | Product;
        price?: number | null;
        quantity?: number | null;
        id?: string | null;
      }[]
    | null;
  shippingTicket: string;
  shippingZipCode: number;
  shippingHouseNumber: number;
  shippingComplement: string;
  userSocialId: number;
  userPhoneNumber: number;
  updatedAt: string;
  createdAt: string;
}
export interface User {
  id: string;
  name: string;
  socialId?: number | null;
  birthdate?: number | null;
  phoneNumber?: number | null;
  address?: string | null;
  houseNumber?: number | null;
  complement?: string | null;
  neighborhood?: string | null;
  city?: string | null;
  state?: string | null;
  zipCode?: number | null;
  roles?: ('admin' | 'customer')[] | null;
  purchases?: (string | Product)[] | null;
  cart?: {
    items?: CartItems;
  };
  skipSync?: boolean | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
export interface Footer {
  id: string;
  copyright?: string | null;
  navItems?:
    | {
        link: {
          type?: ('reference' | 'custom') | null;
          newTab?: boolean | null;
          reference?: {
            relationTo: 'pages';
            value: string | Page;
          } | null;
          url?: string | null;
          label: string;
          icon?: string | Media | null;
        };
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}