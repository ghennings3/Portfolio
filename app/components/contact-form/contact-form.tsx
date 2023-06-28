"use client"

import { HiArrowNarrowRight } from "react-icons/hi"
import { Button } from "../button/button"
import { SectionTitle } from "../section-title"
import { useForm } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import axios from "axios"
import { toast } from "react-hot-toast"
import { motion } from 'framer-motion'

const contactFormSchema = z.object({
    name: z.string().min(3).max(100),
    email: z.string().email(),
    message: z.string().min(1).max(500),
})

type contactFormData = z.infer<typeof contactFormSchema>

export const ContactForm = () => {

    const {
        handleSubmit,
        register,
        reset,
        formState: { isSubmitting },
    } = useForm<contactFormData>({ resolver: zodResolver(contactFormSchema) })
    const onSubmit = async (data: contactFormData) => {
        try {
            await axios.post('/api/contact', data)
            toast.success('Mensagem enviada com sucesso!')
            reset()
        } catch {
            toast.error("Ocorreu um erro ao enviar a mensagem. Tente novamente!")
        }
    }

    return (
        <section id="contact" className="py-16 px-6 md:py-34 flex items-center justify-center bg-gray-950">
            <div className="w-full max-w-[420px] mx auto">
                <SectionTitle subtitle="Contato" title="Vamos trabalhar juntos? Entre em contato" className="items-center text-center" />

                <motion.form onSubmit={handleSubmit(onSubmit)} action="" className="mt-12 w-full flex flex-col gap-4"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                >
                    <input type="text" placeholder="Nome" className=" w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-sky-600" {...register('name')} />
                    <input type="text" placeholder="E-mail" className=" w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-sky-600" {...register('email')} />
                    <textarea maxLength={500} placeholder="Mensagem" className="resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-sky-600" {...register('message')} />
                    <Button className="w-max mx-auto mt-6 shadow-button" disabled={isSubmitting}>
                        Enviar mensagem
                        <HiArrowNarrowRight size={18} />
                    </Button>
                </motion.form>
            </div>
        </ section>
    )
}