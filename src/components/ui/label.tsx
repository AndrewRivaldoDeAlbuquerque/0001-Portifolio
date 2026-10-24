// Importações necessárias para o componente Label
import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label" // Componente base acessível do Radix UI
import { cva, type VariantProps } from "class-variance-authority" // Para criar variantes de estilo
import { cn } from "@/lib/utils" // Utilitário para combinar classes CSS

/**
 * Define as variantes de estilo do label
 * Labels são usados para descrever campos de formulário
 */
const labelVariants = cva(
  // Classes base: texto pequeno, médio peso, sem espaçamento entre linhas, cursor e opacidade para desabilitado
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

/**
 * Componente Label - rótulo para campos de formulário
 * Baseado no componente Label do Radix UI para melhor acessibilidade
 */
const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>, // Tipo da referência do elemento raiz
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & // Props do componente Radix
    VariantProps<typeof labelVariants> // Props das variantes do cva
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    // Aplica as classes das variantes combinadas com classes customizadas
    className={cn(labelVariants(), className)}
    {...props} // Espalha todas as outras props
  />
))
// Nome do componente para debug, usando o nome do componente Radix
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
