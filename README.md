# Abdulzzz Services Hub

A modern e-commerce website for Abdulzzz Services, specializing in custom sublimation products. Built with Next.js 14, TypeScript, Tailwind CSS, and Prisma ORM.

## Features

### Customer Side
- **Product Catalog**: Browse products by category with search and filtering
- **Product Details**: View product information with images and descriptions
- **WhatsApp Integration**: Direct contact via WhatsApp for orders
- **Contact Form**: Submit inquiries through the website
- **Responsive Design**: Works on all devices

### Admin Side
- **Secure Authentication**: Admin login required for access
- **Product Management**: Add, edit, delete, and manage product inventory
- **Stock Management**: Toggle product availability
- **Featured Products**: Mark products as featured
- **Settings**: Change admin password
- **Contact Inquiries**: View submitted contact forms

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Database**: SQLite (development), PostgreSQL (production)
- **ORM**: Prisma
- **Icons**: Lucide React
- **Notifications**: React Hot Toast

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Abdulzzz
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file
   echo 'DATABASE_URL="file:./dev.db"' > .env
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Push schema to database
   npx prisma db push
   
   # Seed the database
   npm run db:seed
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   - Customer site: http://localhost:3000
   - Admin panel: http://localhost:3000/admin/login

## Database Management

### Available Scripts
```bash
# Generate Prisma client
npm run db:generate

# Push schema changes to database
npm run db:push

# Seed database with initial data
npm run db:seed

# Open Prisma Studio (database GUI)
npm run db:studio
```

### Database Schema
- **Products**: Product catalog with images, prices, and stock status
- **Categories**: Product categories for organization
- **ContactInquiries**: Customer contact form submissions
- **AdminUser**: Admin authentication (currently simple, should be enhanced for production)

## Deployment

### Production Database Setup

For production, you should use PostgreSQL instead of SQLite:

1. **Set up PostgreSQL database** (Vercel, Railway, Supabase, etc.)
2. **Update DATABASE_URL** in your environment variables:
   ```
   DATABASE_URL="postgresql://username:password@host:port/database"
   ```
3. **Update Prisma schema** to use PostgreSQL:
   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }
   ```
4. **Deploy and migrate**:
   ```bash
   npx prisma db push
   npm run db:seed
   ```

### Deployment Platforms

#### Vercel (Recommended)
1. Connect your GitHub repository
2. Set environment variables:
   - `DATABASE_URL`: Your PostgreSQL connection string
3. Deploy automatically on push

#### Railway
1. Connect your repository
2. Add PostgreSQL service
3. Set environment variables
4. Deploy

#### Netlify
1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Set environment variables

### Environment Variables

**Required for production:**
```
DATABASE_URL="postgresql://username:password@host:port/database"
```

**Optional:**
```
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="https://yourdomain.com"
```

## Security Considerations

### Current Implementation
- Simple client-side authentication (suitable for basic admin access)
- Form validation and sanitization
- Secure database queries with Prisma

### Production Recommendations
1. **Implement proper authentication** (NextAuth.js, Auth0, etc.)
2. **Add rate limiting** for API routes
3. **Use HTTPS** in production
4. **Hash admin passwords** properly
5. **Add CSRF protection**
6. **Implement proper session management**

## Customization

### Adding Products
1. Edit `lib/data.ts` to add new products
2. Run `npm run db:seed` to update the database
3. Or use the admin panel to add products directly

### Styling
- Colors are defined in `tailwind.config.js`
- Primary colors: Blue theme
- Secondary colors: Purple accent

### Contact Information
Update contact details in `lib/data.ts`:
```typescript
export const contactInfo: ContactInfo = {
  phone: '+92 342 0050354',
  whatsapp: '+92 342 0050354',
  address: 'Your address here',
  businessHours: 'Your business hours'
};
```

## File Structure

```
├── app/                    # Next.js 14 app directory
│   ├── admin/             # Admin pages
│   ├── api/               # API routes
│   ├── products/          # Product pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
├── lib/                   # Utilities and data
├── prisma/                # Database schema
└── public/                # Static assets
```

## API Routes

- `GET /api/products` - Get all products
- `POST /api/products` - Create new product
- `GET /api/products/[id]` - Get specific product
- `PUT /api/products/[id]` - Update product
- `DELETE /api/products/[id]` - Delete product
- `GET /api/categories` - Get all categories
- `POST /api/contact` - Submit contact form

## Troubleshooting

### Common Issues

1. **Database connection errors**
   - Check your `DATABASE_URL` environment variable
   - Ensure database is running and accessible

2. **Prisma client errors**
   - Run `npx prisma generate` after schema changes
   - Restart your development server

3. **Build errors**
   - Clear `.next` folder: `rm -rf .next`
   - Reinstall dependencies: `npm install`

4. **Admin login issues**
   - Default credentials: `admin` / `admin123`
   - Check browser console for errors

### Development Tips

- Use `npm run db:studio` to view/edit database directly
- Check browser console for client-side errors
- Monitor server logs for API errors
- Use browser dev tools to debug styling issues

## Support

For issues and questions:
1. Check the troubleshooting section
2. Review the code comments
3. Check the browser console for errors
4. Verify your environment variables

## License

This project is for Abdulzzz Services Hub. All rights reserved.
