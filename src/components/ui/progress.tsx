// Importações necessárias para o componente Progress
import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress" // Componente base acessível do Radix UI
import { cn } from "@/lib/utils" // Utilitário para combinar classes CSS

/**
 * Componente Progress - barra de progresso visual
 * Baseado no componente Progress do Radix UI para acessibilidade
 */
const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>, // Tipo da referência do elemento raiz
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> // Props do componente Radix
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      // Estilos da barra de fundo: altura, largura total, overflow oculto, bordas arredondadas
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  >
    {/* Indicador de progresso - a parte colorida que representa o valor atual */}
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all" // Cor primária com transição suave
      // Calcula a posição baseada no valor: move da direita para esquerda
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
// Nome do componente para debug
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
