'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Copy, Mail, MessageCircle, Share2, Check } from 'lucide-react'

interface ShareToolsProps {
  referralCode: string
  referralLink: string
}

export function ShareTools({ referralCode, referralLink }: ShareToolsProps) {
  const [copied, setCopied] = useState(false)
  const [canShare, setCanShare] = useState(false)

  useEffect(() => {
    setCanShare(typeof navigator !== 'undefined' && typeof navigator.share === 'function')
  }, [])

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareMessage = `Hey! I've been using Vayo Vault for amazing travel deals and thought you'd love it too. Get $100 off your first booking with my referral code: ${referralCode}\n\n${referralLink}`

  const shareViaEmail = () => {
    const subject = encodeURIComponent('Get $100 off your next vacation!')
    const body = encodeURIComponent(shareMessage)
    window.open(`mailto:?subject=${subject}&body=${body}`)
  }

  const shareViaSMS = () => {
    window.open(`sms:?&body=${encodeURIComponent(shareMessage)}`)
  }

  const shareViaWeb = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Vayo Vault Referral',
          text: shareMessage,
        })
      } catch (err) {
        console.log('Share cancelled')
      }
    }
  }

  return (
    <Card padding="lg">
      <h3 className="text-xl font-semibold text-primary-dark mb-4">Share Your Code</h3>

      {/* Referral Code Display */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Your Referral Code
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={referralCode}
            readOnly
            className="flex-1 px-4 py-3 bg-background-light border border-gray-300 rounded-lg font-mono text-lg font-bold text-primary"
          />
          <Button
            variant="secondary"
            onClick={() => copyToClipboard(referralCode)}
            className="gap-2"
          >
            {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
            {copied ? 'Copied!' : 'Copy'}
          </Button>
        </div>
      </div>

      {/* Referral Link */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Your Referral Link
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={referralLink}
            readOnly
            className="flex-1 px-4 py-3 bg-background-light border border-gray-300 rounded-lg text-sm text-gray-600"
          />
          <Button
            variant="secondary"
            onClick={() => copyToClipboard(referralLink)}
            className="gap-2"
          >
            {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Share Buttons */}
      <div className="space-y-3">
        <p className="text-sm font-medium text-gray-700">Quick Share</p>
        <div className="grid grid-cols-2 gap-3">
          <Button variant="secondary" onClick={shareViaEmail} className="gap-2">
            <Mail className="w-5 h-5" />
            Email
          </Button>
          <Button variant="secondary" onClick={shareViaSMS} className="gap-2">
            <MessageCircle className="w-5 h-5" />
            SMS
          </Button>
          {canShare && (
            <Button variant="secondary" onClick={shareViaWeb} className="gap-2 col-span-2">
              <Share2 className="w-5 h-5" />
              Share
            </Button>
          )}
        </div>
      </div>

      {/* Social Media Buttons */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-sm font-medium text-gray-700 mb-3">Share on Social Media</p>
        <div className="flex gap-3">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 bg-[#1877f2] text-white rounded-lg text-center hover:bg-[#166fe5] transition-colors"
          >
            Facebook
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 bg-[#1da1f2] text-white rounded-lg text-center hover:bg-[#1a91da] transition-colors"
          >
            Twitter
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(referralLink)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 bg-[#0a66c2] text-white rounded-lg text-center hover:bg-[#095196] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </Card>
  )
}
