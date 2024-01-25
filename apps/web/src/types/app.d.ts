interface PageProps<P = {}> extends P {
  params: Record<string | undefined, string>
  searchParams: Record<string, string | string[] | undefined>
}

interface LayoutProps<P = {}> extends P {
  params: Record<string | undefined, string>
  children: React.ReactNode
}

type JSXElement = JSX.Element | Promise<JSX.Element>

declare namespace App {
  type FC<P = {}> = FunctionComponent<P>
  type Page<P = {}> = (props: PageProps<P>) => JSXElement
  type Layout<P = {}> = (props: LayoutProps<P>) => JSXElement

  interface FunctionComponent<P = {}> {
    (props: P, context?: any): ReactElement<any, any> | null
    propTypes?: WeakValidationMap<P> | undefined
    contextTypes?: ValidationMap<any> | undefined
    defaultProps?: Partial<P> | undefined
    displayName?: string | undefined
  }
}
