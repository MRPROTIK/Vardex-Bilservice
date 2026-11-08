'use client'

import { useState, useEffect } from 'react'
import { Calendar, Clock, User, Phone, Car, ChevronRight, CheckCircle2, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { createClient } from '@/utils/supabase/client'

const TIMES = ['08:00', '10:00', '13:00', '15:00', '16:30']
const DATES = [
  { day: 'Mån', date: '2024-10-14', label: '14' },
  { day: 'Tis', date: '2024-10-15', label: '15' },
  { day: 'Ons', date: '2024-10-16', label: '16' },
  { day: 'Tor', date: '2024-10-17', label: '17' },
  { day: 'Fre', date: '2024-10-18', label: '18' },
]

export default function BookingPage() {
  const supabase = createClient()
  const [selectedDate, setSelectedDate] = useState('2024-10-14')
  const [selectedTime, setSelectedTime] = useState('')
  const [bookedSlots, setBookedSlots] = useState<string[]>([])
  const [isBooked, setIsBooked] = useState(false)
  const [loading, setLoading] = useState(false)

  // Form states
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [plate, setPlate] = useState('')

  useEffect(() => {
    async function fetchAvailability() {
      const { data, error } = await supabase
        .from('booked_slots')
        .select('booking_time')
        .eq('booking_date', selectedDate)
      
      if (error) {
        console.error('Error fetching availability:', error)
        return
      }

      if (data) {
        setBookedSlots(data.map((b: { booking_time: string }) => b.booking_time))
      }
    }
    fetchAvailability()
  }, [selectedDate, supabase])

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedTime || !name || !phone || !plate) return

    setLoading(true)
    
    const { error } = await supabase.from('bookings').insert([
      {
        customer_name: name,
        phone: phone,
        service: 'Premium-rekond', // Default or from context
        booking_date: selectedDate,
        booking_time: selectedTime,
        status: 'pending'
      }
    ])

    if (error) {
      alert('Kunde inte genomföra bokningen: ' + error.message)
    } else {
      setIsBooked(true)
    }
    setLoading(false)
  }

  if (isBooked) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-6 text-center">
        <div className="max-w-md w-full">
          <div className="relative mb-8 flex justify-center">
             <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full" />
             <CheckCircle2 className="w-24 h-24 text-emerald-500 relative z-10 animate-in zoom-in duration-500" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Bokning Bekräftad!</h1>
          <p className="text-zinc-400 mb-8">Vi har skickat en bekräftelse till ditt telefonnummer. Välkommen till oss!</p>
          <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Tillbaka till start
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 py-12 px-6">
      <div className="max-w-xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Avbryt
        </Link>

        <h1 className="text-4xl font-bold mb-2">Välj tid</h1>
        <p className="text-zinc-500 mb-12">Hitta en tid som passar dig bäst.</p>

        <form onSubmit={handleBooking} className="space-y-10">
          {/* Date Picker */}
          <div className="grid grid-cols-5 gap-3">
            {DATES.map((d) => (
              <button
                key={d.date}
                type="button"
                onClick={() => setSelectedDate(d.date)}
                className={`p-4 rounded-2xl border transition-all text-center ${
                  selectedDate === d.date 
                  ? 'border-white bg-white/5 ring-1 ring-white' 
                  : 'border-zinc-800 bg-zinc-900/50 hover:border-zinc-700'
                }`}
              >
                <div className="text-[10px] uppercase font-bold text-zinc-500 mb-1">{d.day}</div>
                <div className="text-xl font-bold">{d.label}</div>
              </button>
            ))}
          </div>

          {/* Time Slots */}
          <div className="grid grid-cols-3 gap-3">
            {TIMES.map((time) => {
              const isTaken = bookedSlots.includes(time)
              return (
                <button
                  key={time}
                  type="button"
                  disabled={isTaken}
                  onClick={() => setSelectedTime(time)}
                  className={`py-4 rounded-xl border transition-all flex items-center justify-center gap-2 ${
                    isTaken 
                    ? 'opacity-20 cursor-not-allowed bg-zinc-900 border-zinc-900' 
                    : selectedTime === time 
                    ? 'border-white bg-white text-black' 
                    : 'border-zinc-800 bg-zinc-900/50 hover:border-zinc-700'
                  }`}
                >
                  <Clock className="w-4 h-4" />
                  <span className="font-medium">{time}</span>
                </button>
              )
            })}
          </div>

          {/* Form Inputs */}
          <div className="space-y-4 pt-4 border-t border-zinc-900">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-600" />
              <input 
                type="text" 
                placeholder="Ditt namn" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-zinc-600" 
              />
            </div>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-600" />
              <input 
                type="tel" 
                placeholder="Telefonnummer" 
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-zinc-600" 
              />
            </div>
            <div className="relative">
              <Car className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-600" />
              <input 
                type="text" 
                placeholder="Registreringsnummer" 
                required
                value={plate}
                onChange={(e) => setPlate(e.target.value.toUpperCase())}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-zinc-600 uppercase font-mono" 
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={!selectedTime || loading}
            className="w-full bg-white text-black font-bold py-5 rounded-2xl hover:bg-zinc-200 transition-all disabled:opacity-20 flex items-center justify-center gap-2 group"
          >
            {loading ? 'Bokar...' : 'Boka Behandling'} 
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </main>
  )
}
