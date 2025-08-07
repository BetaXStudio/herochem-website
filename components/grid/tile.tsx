import clsx from 'clsx';
import Image from 'next/image';
import Label from '../label';

export function GridTileImage({
  isInteractive = true,
  active,
  label,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
  label?: {
    title: string;
    amount: string;
    currencyCode: string;
    position?: 'bottom' | 'center';
  };
} & React.ComponentProps<typeof Image>) {
  return (
    <div
      className={clsx(
        'group flex h-full w-full items-center justify-center overflow-hidden rounded-lg transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl',
        {
          relative: label,
          'shadow-lg transform scale-[1.02]': active,
        }
      )}
      style={{
        background: active 
          ? 'linear-gradient(135deg, rgba(233, 17, 17, 0.15) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(0, 0, 0, 0.3) 100%)'
          : 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 50%, rgba(0, 0, 0, 0.2) 100%)',
        backdropFilter: 'blur(15px)',
        border: active 
          ? '1px solid rgba(233, 17, 17, 0.3)'
          : '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
      onMouseEnter={(e) => {
        if (!active) {
          e.currentTarget.style.background = 'linear-gradient(135deg, rgba(233, 17, 17, 0.1) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(0, 0, 0, 0.25) 100%)';
          e.currentTarget.style.border = '1px solid rgba(233, 17, 17, 0.2)';
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 50%, rgba(0, 0, 0, 0.2) 100%)';
          e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
        }
      }}
    >
      {props.src ? (
        <Image
          className={clsx('relative h-full w-full object-contain', {
            'transition duration-300 ease-in-out group-hover:scale-105': isInteractive
          })}
          {...props}
        />
      ) : null}
      {label ? (
        <Label
          title={label.title}
          amount={label.amount}
          currencyCode={label.currencyCode}
          position={label.position}
        />
      ) : null}
    </div>
  );
}
