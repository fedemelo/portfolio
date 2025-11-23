# Awards Assets

This directory contains assets related to awards and recognitions.

## Structure

- **`certificates/`**: Store certificate or diploma PDFs/images here
  - Example: `/awards/certificates/summa-cum-laude.pdf`
  - Example: `/awards/certificates/athletic-distinction.jpg`

- **`images/`**: Store ceremony photos here
  - Example: `/awards/images/graduation-ceremony-2025.jpg`
  - Example: `/awards/images/award-presentation.jpg`

## Usage in Award Data

In your award data (`shared/data/awards.ts`), reference these files:

```typescript
{
  title: { en: "Award Name" },
  // ... other fields ...
  certificateUrl: "/awards/certificates/award-certificate.pdf",
  images: [
    "/awards/images/ceremony-photo-1.jpg",
    "/awards/images/ceremony-photo-2.jpg",
  ]
}
```

## File Naming Convention

Use descriptive, lowercase, hyphenated names:
- ✅ `summa-cum-laude-certificate.pdf`
- ✅ `athletic-distinction-ceremony-2025.jpg`
- ❌ `IMG_1234.jpg`
- ❌ `certificate.pdf`

## Supported Formats

- **Certificates**: PDF, PNG, JPG
- **Images**: JPG, PNG, WebP

