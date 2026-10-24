// Importações para o sistema de componentes Card
import * as React from "react"
import { cn } from "@/lib/utils" // Utilitário para combinar classes CSS

/**
 * Componente Card principal
 * Container básico com bordas arredondadas, sombra e fundo
 */
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      // Estilos base: bordas arredondadas, borda, fundo e sombra sutil
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className // Permite classes adicionais
    )}
    {...props} // Espalha todas as props HTML div
  />
))
Card.displayName = "Card"

/**
 * Componente CardHeader
 * Área superior do card, geralmente contém título e descrição
 */
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    // Layout vertical com espaçamento entre elementos e padding
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

/**
 * Componente CardTitle
 * Título principal do card, renderizado como h3 para semântica
 */
const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      // Estilo de título: grande, negrito, sem espaçamento entre linhas
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

/**
 * Componente CardDescription
 * Texto descritivo do card, com cor mais suave
 */
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    // Texto pequeno com cor esmaecida para descrições
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

/**
 * Componente CardContent
 * Área principal de conteúdo do card
 */
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div 
    ref={ref} 
    // Padding nas laterais e inferior, sem padding superior (pt-0)
    className={cn("p-6 pt-0", className)} 
    {...props} 
  />
))
CardContent.displayName = "CardContent"

/**
 * Componente CardFooter
 * Área inferior do card, geralmente para botões ou ações
 */
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    // Layout horizontal centralizando itens verticalmente
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
