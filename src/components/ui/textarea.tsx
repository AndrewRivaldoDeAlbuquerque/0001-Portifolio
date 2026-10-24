// Importações necessárias para o componente Textarea
import * as React from "react"
import { cn } from "@/lib/utils" // Utilitário para combinar classes CSS

/**
 * Interface que define as propriedades do componente Textarea
 * Extende as propriedades nativas do elemento HTML textarea
 */
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {} // Todas as props nativas do textarea

/**
 * Componente Textarea reutilizável
 * Campo de texto multilinha com estilos padronizados
 */
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          // Classes base: dimensões mínimas, bordas, padding e estilos de foco
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className // Permite classes customizadas adicionais
        )}
        ref={ref} // Referência para o elemento DOM
        {...props} // Espalha todas as outras props nativas do textarea
      />
    )
  }
)
// Nome do componente para debug e DevTools
Textarea.displayName = "Textarea"

export { Textarea }
