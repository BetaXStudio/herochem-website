import clsx from 'clsx';

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return (
    <div
      className={clsx(
        'flex flex-none items-center justify-center',
        {
          'h-[40px] w-[40px] rounded-xl': !size,
          'h-[30px] w-[30px] rounded-lg': size === 'sm'
        }
      )}
    >
      <img
        src="/HC_Logo.png"
        alt="HeroChem Logo"
        className={clsx({
          'h-[32px] w-[32px]': !size,
          'h-[24px] w-[24px]': size === 'sm'
        })}
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
}
