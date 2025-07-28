"use client"

import { useState, useEffect } from "react"
import { Heart, MapPin, Camera, Gift } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AnniversaryPage() {
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Cambia esta fecha por la fecha de cuando empezaron a ser novios
  const anniversaryDate = new Date("2024-08-01") // Cambiar a agosto 2024

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const diff = now.getTime() - anniversaryDate.getTime()

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      setTimeElapsed({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [anniversaryDate])

  const memories = [
    {
      title: "Nuestra Primera Cita",
      date: "McDonald's - Agosto 2024",
      description: "El día que todo comenzó. Recuerdo lo nerviosa que estabas, pero fue perfecto.",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      title: "Nuestro Primer Viaje",
      date: "Pronto...",
      description: "¿Cuándo unos besos en la playita?",
      icon: <MapPin className="w-6 h-6" />,
    },
    {
      title: "Nuestro Primer Beso",
      date: "En el Carro",
      description: "Nuestro Momento Más Hermoso. Ahí supe que estaría enamorado de ti por el resto de mi vida.",
      icon: <Camera className="w-6 h-6" />,
    },
  ]

  const reasons = [
    "Tu sonrisa que ilumina mis días",
    "Cómo te pones nerviosa y te ves adorable",
    "La forma en que me haces reír siempre",
    "Tu bondad y tu corazón hermoso",
    "Cómo me apoyas en todo momento",
    "Los pequeños detalles que tienes conmigo",
    "Tu forma única de ver el mundo",
    "Cómo me haces sentir especial cada día",
    "Nuestras conversaciones y risas",
    "Simplemente por ser tú, mi Valeria",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10" />
        <div className="relative max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Heart className="w-16 h-16 text-pink-500 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Nuestro Aniversario</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            {/* Personaliza estos nombres */}
            Angelo & Valeria
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Celebrando el amor que crece cada día. Cada momento contigo es un regalo.
          </p>
        </div>
      </section>

      {/* Contador de Tiempo */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Tiempo Juntos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-pink-600">{timeElapsed.days}</div>
                <div className="text-gray-600">Días</div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-600">{timeElapsed.hours}</div>
                <div className="text-gray-600">Horas</div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-indigo-600">{timeElapsed.minutes}</div>
                <div className="text-gray-600">Minutos</div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-pink-600">{timeElapsed.seconds}</div>
                <div className="text-gray-600">Segundos</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recuerdos */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Nuestros Recuerdos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {memories.map((memory, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-pink-100 rounded-full mr-3">{memory.icon}</div>
                    <h3 className="font-semibold text-gray-800">{memory.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{memory.date}</p>
                  <p className="text-gray-700">{memory.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Razones por las que te amo */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Razones por las que te amo</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-center p-4 bg-white/80 backdrop-blur-sm rounded-lg">
                <Heart className="w-5 h-5 text-pink-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería de Fotos Placeholder */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Nuestros Momentos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/images/couple-mcdonalds.jpg"
                alt="Nuestra primera cita en McDonald's"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/images/couple-mall.jpg"
                alt="Juntos en el centro comercial"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/images/valeria-mirror.jpg"
                alt="Mi hermosa Valeria"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/images/couple-mall2.jpg"
                alt="Más momentos juntos"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/images/valeria-car.jpg"
                alt="Valeria en el carro"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/images/valeria-selfie.jpg"
                alt="Mi amor hermosa"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <p className="text-center text-gray-600 mt-6">Cada foto cuenta nuestra historia de amor ❤️</p>
        </div>
      </section>

      {/* Mensaje Final */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <Gift className="w-16 h-16 text-pink-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Para Ti Mi Amor</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Mi amor,
            <br />
            <br />
            Cada día contigo es una aventura que atesoro. Recuerdo perfecto nuestra primera cita en McDonald's; estabas
            tan adorablemente nerviosa, ¡y me encantó! Y ni hablar de ese primer beso en el carro... me robó el corazón
            por completo.
            <br />
            <br />
            Gracias por llenar mi vida de tanta risa, amor y momentos que no cambiaría por nada. Ya quiero que llegue
            nuestro primer viaje a la playa.
            <br />
            <br />
            Aquí tienes mi corazón, hoy y siempre.
            <br />
            <br />
            Te quiero.
          </p>
          <div className="flex justify-center">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full">Te Amo ❤️</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-600 bg-white/30">
        <p>Hecho con ❤️ para nuestro aniversario</p>
        <p className="text-sm mt-2">Julio 2024 - Para siempre ❤️ Angelo & Valeria</p>
      </footer>
    </div>
  )
}
