'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Copy, Plus, ExternalLink, Check } from 'lucide-react'

interface TrackingLink {
  id: string
  name: string
  url: string
  clicks: number
  conversions: number
  createdAt: string
}

interface TrackingLinksProps {
  affiliateCode: string
  baseUrl?: string
}

export function TrackingLinks({ affiliateCode, baseUrl = 'https://vayovault.com' }: TrackingLinksProps) {
  const [copied, setCopied] = useState(false)
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [newLinkName, setNewLinkName] = useState('')

  // Mock data - replace with real data
  const [links, setLinks] = useState<TrackingLink[]>([
    {
      id: '1',
      name: 'Homepage Link',
      url: `${baseUrl}/?ref=${affiliateCode}`,
      clicks: 1243,
      conversions: 45,
      createdAt: '2024-01-15',
    },
    {
      id: '2',
      name: 'Blog Post - Hawaii',
      url: `${baseUrl}/destinations/hawaii?ref=${affiliateCode}&source=blog`,
      clicks: 856,
      conversions: 28,
      createdAt: '2024-02-10',
    },
    {
      id: '3',
      name: 'Instagram Bio',
      url: `${baseUrl}/?ref=${affiliateCode}&source=instagram`,
      clicks: 2341,
      conversions: 67,
      createdAt: '2024-01-20',
    },
  ])

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleCreateLink = () => {
    if (!newLinkName.trim()) return

    const newLink: TrackingLink = {
      id: Date.now().toString(),
      name: newLinkName,
      url: `${baseUrl}/?ref=${affiliateCode}&source=${newLinkName.toLowerCase().replace(/\s+/g, '-')}`,
      clicks: 0,
      conversions: 0,
      createdAt: new Date().toISOString().split('T')[0],
    }

    setLinks([...links, newLink])
    setNewLinkName('')
    setShowCreateForm(false)
  }

  return (
    <Card padding="lg">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-primary-dark">Tracking Links</h3>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setShowCreateForm(!showCreateForm)}
          className="gap-2"
        >
          <Plus className="w-4 h-4" />
          Create Link
        </Button>
      </div>

      {showCreateForm && (
        <div className="mb-6 p-4 bg-background-light rounded-lg">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Link Name
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={newLinkName}
              onChange={(e) => setNewLinkName(e.target.value)}
              placeholder="e.g., YouTube Video, Email Campaign"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              onKeyPress={(e) => e.key === 'Enter' && handleCreateLink()}
            />
            <Button onClick={handleCreateLink}>Create</Button>
            <Button variant="ghost" onClick={() => setShowCreateForm(false)}>
              Cancel
            </Button>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {links.map((link) => (
          <div key={link.id} className="p-4 bg-background-light rounded-lg">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h4 className="font-semibold text-primary-dark mb-1">{link.name}</h4>
                <div className="flex items-center gap-2 text-sm text-gray-600 font-mono bg-white px-3 py-2 rounded border border-gray-200">
                  <span className="truncate flex-1">{link.url}</span>
                  <button
                    onClick={() => copyToClipboard(link.url)}
                    className="flex-shrink-0 text-primary hover:text-primary-dark transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 text-primary hover:text-primary-dark transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex gap-6 text-sm">
              <div>
                <span className="text-text-secondary">Clicks: </span>
                <span className="font-semibold text-primary-dark">{link.clicks.toLocaleString()}</span>
              </div>
              <div>
                <span className="text-text-secondary">Conversions: </span>
                <span className="font-semibold text-green-600">{link.conversions}</span>
              </div>
              <div>
                <span className="text-text-secondary">CVR: </span>
                <span className="font-semibold text-purple-600">
                  {link.clicks > 0 ? ((link.conversions / link.clicks) * 100).toFixed(1) : 0}%
                </span>
              </div>
              <div className="ml-auto text-text-tertiary">
                Created {new Date(link.createdAt).toLocaleDateString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
