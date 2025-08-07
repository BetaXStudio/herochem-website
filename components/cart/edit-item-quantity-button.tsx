'use client';

import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import type { CartItem } from 'lib/shopify_disabled/types';

function SubmitButton({ type }: { type: 'plus' | 'minus' }) {
  return (
    <button
      type="submit"
      aria-label={
        type === 'plus' ? 'Increase item quantity' : 'Reduce item quantity'
      }
      className="ease flex h-8 w-8 flex-none items-center justify-center rounded-md p-1 transition-all duration-200 hover:opacity-80"
      style={{
        backgroundColor: 'rgb(64,64,74)',
        color: 'white',
        border: '1px solid rgb(64,64,74)',
        fontSize: '12px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}
      onMouseEnter={(e) => {
        const target = e.target as HTMLButtonElement;
        target.style.backgroundColor = '#e91111';
        target.style.borderColor = '#e91111';
      }}
      onMouseLeave={(e) => {
        const target = e.target as HTMLButtonElement;
        target.style.backgroundColor = 'rgb(64,64,74)';
        target.style.borderColor = 'rgb(64,64,74)';
      }}
    >
      {type === 'plus' ? (
        <PlusIcon className="h-4 w-4 text-white" />
      ) : (
        <MinusIcon className="h-4 w-4 text-white" />
      )}
    </button>
  );
}

export function EditItemQuantityButton({
  item,
  type,
  optimisticUpdate
}: {
  item: CartItem;
  type: 'plus' | 'minus';
  optimisticUpdate: any;
}) {
  const payload = {
    merchandiseId: item.merchandise.id,
    quantity: type === 'plus' ? item.quantity + 1 : item.quantity - 1
  };

  return (
    <form
      action={async () => {
        optimisticUpdate(payload.merchandiseId, type);
        // Dummy update action
      }}
    >
      <SubmitButton type={type} />
      <p aria-live="polite" className="sr-only" role="status">
        {/* Placeholder for status message */}
      </p>
    </form>
  );
}
