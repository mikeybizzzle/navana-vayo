'use client'

import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Download, Image as ImageIcon, Mail, FileText } from 'lucide-react'

interface Asset {
  id: string
  name: string
  type: 'banner' | 'email' | 'social' | 'copy'
  size?: string
  format?: string
  downloadUrl: string
}

export function MarketingAssets() {
  const assets: Asset[] = [
    // Banners
    {
      id: 'b1',
      name: 'Leaderboard Banner',
      type: 'banner',
      size: '728x90',
      format: 'JPG',
      downloadUrl: '#',
    },
    {
      id: 'b2',
      name: 'Medium Rectangle',
      type: 'banner',
      size: '300x250',
      format: 'JPG',
      downloadUrl: '#',
    },
    {
      id: 'b3',
      name: 'Skyscraper',
      type: 'banner',
      size: '160x600',
      format: 'JPG',
      downloadUrl: '#',
    },
    {
      id: 'b4',
      name: 'Mobile Banner',
      type: 'banner',
      size: '320x50',
      format: 'JPG',
      downloadUrl: '#',
    },
    // Email Templates
    {
      id: 'e1',
      name: 'Welcome Email',
      type: 'email',
      format: 'HTML',
      downloadUrl: '#',
    },
    {
      id: 'e2',
      name: 'Hot Deals Newsletter',
      type: 'email',
      format: 'HTML',
      downloadUrl: '#',
    },
    // Social Media
    {
      id: 's1',
      name: 'Instagram Story',
      type: 'social',
      size: '1080x1920',
      format: 'PNG',
      downloadUrl: '#',
    },
    {
      id: 's2',
      name: 'Facebook Post',
      type: 'social',
      size: '1200x630',
      format: 'PNG',
      downloadUrl: '#',
    },
    {
      id: 's3',
      name: 'Twitter Header',
      type: 'social',
      size: '1500x500',
      format: 'PNG',
      downloadUrl: '#',
    },
    // Copy Templates
    {
      id: 'c1',
      name: 'Email Copy Template',
      type: 'copy',
      format: 'TXT',
      downloadUrl: '#',
    },
    {
      id: 'c2',
      name: 'Social Media Captions',
      type: 'copy',
      format: 'TXT',
      downloadUrl: '#',
    },
  ]

  const assetCategories = [
    { type: 'banner', title: 'Banner Ads', icon: ImageIcon },
    { type: 'email', title: 'Email Templates', icon: Mail },
    { type: 'social', title: 'Social Media Graphics', icon: ImageIcon },
    { type: 'copy', title: 'Copy Templates', icon: FileText },
  ]

  return (
    <Card padding="lg">
      <h3 className="text-xl font-semibold text-primary-dark mb-6">Marketing Assets</h3>

      <div className="space-y-8">
        {assetCategories.map((category) => {
          const categoryAssets = assets.filter((a) => a.type === category.type)

          return (
            <div key={category.type}>
              <div className="flex items-center gap-2 mb-4">
                <category.icon className="w-5 h-5 text-primary" />
                <h4 className="font-semibold text-primary-dark">{category.title}</h4>
                <span className="text-sm text-text-secondary">({categoryAssets.length})</span>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {categoryAssets.map((asset) => (
                  <div
                    key={asset.id}
                    className="flex items-center justify-between p-4 bg-background-light rounded-lg border border-gray-200 hover:border-primary transition-colors"
                  >
                    <div>
                      <p className="font-medium text-primary-dark mb-1">{asset.name}</p>
                      <p className="text-sm text-text-secondary">
                        {asset.size && `${asset.size} • `}
                        {asset.format}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-2"
                      onClick={() => {
                        // Placeholder for download
                        console.log(`Download ${asset.name}`)
                      }}
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-gray-700">
          <strong>Need custom assets?</strong> Contact your affiliate manager for custom banners, landing pages, or promotional materials tailored to your audience.
        </p>
      </div>
    </Card>
  )
}
