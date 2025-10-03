'use client'

import { useState } from 'react'
import { Calendar, MapPin, Users, Search } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

type SearchTab = 'hotels' | 'packages' | 'cruises' | 'cars'

export function SearchWidget() {
  const [activeTab, setActiveTab] = useState<SearchTab>('packages')
  const [destination, setDestination] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState('2')

  const tabs: { id: SearchTab; label: string }[] = [
    { id: 'packages', label: 'Vacation Packages' },
    { id: 'hotels', label: 'Hotels' },
    { id: 'cruises', label: 'Cruises' },
    { id: 'cars', label: 'Car Rentals' },
  ]

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
      {/* Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'px-6 py-3 rounded-lg font-medium text-sm whitespace-nowrap transition-all',
              activeTab === tab.id
                ? 'bg-primary text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Search Form */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {/* Destination */}
        <div className="lg:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Destination
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Where do you want to go?"
              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        {/* Check-in */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Check-in
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        {/* Check-out */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Check-out
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        {/* Guests */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Guests
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent appearance-none"
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5+ Guests</option>
            </select>
          </div>
        </div>
      </div>

      {/* Search Button */}
      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <Button size="lg" className="flex-1 gap-2">
          <Search className="w-5 h-5" />
          Search {activeTab === 'packages' ? 'Packages' : activeTab === 'hotels' ? 'Hotels' : activeTab === 'cruises' ? 'Cruises' : 'Rental Cars'}
        </Button>
        <Button variant="secondary" size="lg">
          Flexible Dates
        </Button>
      </div>

      {/* Additional Options */}
      {activeTab === 'packages' && (
        <div className="mt-4 flex gap-4 text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="rounded border-gray-300" defaultChecked />
            <span className="text-gray-700">Include Flight</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="rounded border-gray-300" />
            <span className="text-gray-700">Add Car Rental</span>
          </label>
        </div>
      )}
    </div>
  )
}
