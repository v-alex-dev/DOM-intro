export const btnStyle = (id: string) => {
  const btn: HTMLElement | null = document.getElementById(id);

  if (btn !== null) {
    const classElement = [
      'p-2',
      'rounded-xl',
      'bg-sky-500',
      'shadow-md',
      'text-xl',
      'bg-cyan-500',
      'mt-6',
      'mx-auto',
      'w-1/4'
    ];

    for (const item of classElement) {
      btn.classList.add(item);
    }
  }
}