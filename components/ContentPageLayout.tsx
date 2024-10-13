
export type ContentPageLayoutProps = {
  title: string,
  showHandWave?: boolean,
  children: any
}

export default function ContentPageLayout({ title, showHandWave, children }: Readonly<ContentPageLayoutProps>) {
  return (
    <div className="flex flex-col p-10 h-full w-full justify-start items-center dark:text-white">
      <h1 className="flex w-full text-4xl md:text-6xl font-bold">{title}{showHandWave ? <span className="animate-waving-hand pl-1">👋</span> : null}</h1>
      {children}
    </div>
  );
}