// Importações necessárias para o componente Badge
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority" // Para criar variantes de estilo
import { cn } from "@/lib/utils" // Utilitário para combinar classes CSS

/**
 * Define as variantes de estilo do badge usando class-variance-authority (cva)
 * Badges são pequenos elementos para exibir status, categorias ou contadores
 */
const badgeVariants = cva(
  // Classes base aplicadas a todos os badges
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    // Definição das variantes de aparência
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80", // Badge padrão azul
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80", // Badge cinza
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80", // Badge vermelho para alertas
        outline: "text-foreground", // Badge apenas com borda, sem fundo
      },
    },
    // Valor padrão quando nenhuma variante é especificada
    defaultVariants: {
      variant: "default",
    },
  }
)

/**
 * Interface que define as propriedades do componente Badge
 * Extende as propriedades nativas do elemento HTML div
 */
export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>, // Todas as props nativas da div HTML
    VariantProps<typeof badgeVariants> {} // Props das variantes definidas no cva

/**
 * Componente Badge - elemento visual para indicar status, categorias ou contadores
 * Renderiza uma pequena etiqueta colorida com texto
 */
function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div 
      // Combina as classes das variantes com classes customizadas
      className={cn(badgeVariants({ variant }), className)} 
      {...props} // Espalha todas as outras props para a div
    />
  )
}

export { Badge, badgeVariants }
