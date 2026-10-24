// Importações necessárias para o componente Button
import * as React from "react"
import { Slot } from "@radix-ui/react-slot" // Permite que o botão seja renderizado como outro elemento
import { cva, type VariantProps } from "class-variance-authority" // Para criar variantes de estilo
import { cn } from "@/lib/utils" // Utilitário para combinar classes CSS

/**
 * Define as variantes de estilo do botão usando class-variance-authority (cva)
 * Esta função cria classes CSS condicionais baseadas nas props passadas
 */
const buttonVariants = cva(
  // Classes base aplicadas a todos os botões
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    // Definição das variantes disponíveis
    variants: {
      // Variantes de aparência do botão
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90", // Botão padrão azul
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90", // Botão vermelho para ações destrutivas
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground", // Botão com apenas borda
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80", // Botão secundário cinza
        ghost: "hover:bg-accent hover:text-accent-foreground", // Botão transparente que aparece no hover
        link: "text-primary underline-offset-4 hover:underline", // Botão que parece um link
      },
      // Variantes de tamanho do botão
      size: {
        default: "h-10 px-4 py-2", // Tamanho padrão
        sm: "h-9 rounded-md px-3", // Tamanho pequeno
        lg: "h-11 rounded-md px-8", // Tamanho grande
        icon: "h-10 w-10", // Tamanho quadrado para ícones
      },
    },
    // Valores padrão quando nenhuma prop é especificada
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

/**
 * Interface que define as propriedades do componente Button
 * Extende as propriedades nativas do elemento HTML button
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, // Todas as props nativas do button HTML
    VariantProps<typeof buttonVariants> { // Props das variantes definidas no cva
  asChild?: boolean // Se true, renderiza como um componente filho em vez de button
}

/**
 * Componente Button principal
 * Usa forwardRef para permitir que o componente pai acesse a referência do elemento DOM
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // Decide qual componente renderizar: Slot (para asChild) ou button nativo
    const Comp = asChild ? Slot : "button"
    
    return (
      <Comp
        // Aplica as classes CSS combinando as variantes com classes customizadas
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref} // Passa a referência para o elemento DOM
        {...props} // Espalha todas as outras props para o elemento
      />
    )
  }
)
// Nome do componente para debug e DevTools
Button.displayName = "Button"

export { Button, buttonVariants }
