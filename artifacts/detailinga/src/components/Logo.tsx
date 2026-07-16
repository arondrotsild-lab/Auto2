export function Logo({ className = '' }: { className?: string }) {
  return (
    <img
      src="/images/logo-bt.jpg"
      alt="BT Детейлинг Центр"
      style={{ mixBlendMode: 'screen' }}
      className={className || 'h-14 w-auto md:h-16 w-auto'}
    />
  );
}
