import { SOCIAL } from "@/lib/coaches";

const cls =
  "flex h-12 w-12 items-center justify-center rounded-full bg-card shadow-soft transition-transform hover:-translate-y-0.5";

export function VkMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <rect width="48" height="48" rx="14" fill="#0077FF" />
      <path
        d="M25.5 34C15.6 34 10 27.2 9.8 16h5c.2 8.2 3.8 11.7 6.6 12.4V16h4.7v7.1c2.8-.3 5.7-3.5 6.7-7.1h4.7c-.8 4.4-4 7.6-6.3 8.9 2.3 1.1 5.9 3.9 7.3 9.1h-5.2c-1.1-3.5-3.9-6.2-7.2-6.5V34h-.6Z"
        fill="#fff"
      />
    </svg>
  );
}

export function VkLink({
  className = "h-7 w-7",
  button = true,
}: {
  className?: string;
  button?: boolean;
}) {
  if (!button) {
    return (
      <a
        href={SOCIAL.vk}
        target="_blank"
        rel="noreferrer"
        aria-label="ВКонтакте"
        className="transition-opacity hover:opacity-70"
      >
        <VkMark className={className} />
      </a>
    );
  }
  return (
    <a href={SOCIAL.vk} target="_blank" rel="noreferrer" aria-label="ВКонтакте" className={cls}>
      <VkMark className={className} />
    </a>
  );
}

export function SocialIcons() {
  return (
    <div className="flex gap-3">
      <a href={SOCIAL.max} target="_blank" rel="noreferrer" aria-label="МАКС" className={cls}>
        <svg viewBox="0 0 48 48" className="h-7 w-7" aria-hidden>
          <defs>
            <linearGradient id="maxg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#4CC3FF" />
              <stop offset="0.5" stopColor="#5B5BFF" />
              <stop offset="1" stopColor="#A445F5" />
            </linearGradient>
          </defs>
          <rect width="48" height="48" rx="14" fill="url(#maxg)" />
          <path
            d="M24 11c-7.3 0-13 5.4-13 12.6 0 3.4 1.2 6.7 2.6 9 .5.9.2 3.6-.6 5.6 2.1.2 4.9-.7 6-1.6 1.6.6 3.3 1 5 1 7.3 0 13-5.6 13-12.8S31.3 11 24 11Zm0 19.6a6.8 6.8 0 1 1 0-13.6 6.8 6.8 0 0 1 0 13.6Z"
            fill="#fff"
          />
        </svg>
      </a>
      <VkLink className="h-7 w-7" />
      <a
        href={SOCIAL.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className={cls}
      >
        <svg viewBox="0 0 48 48" className="h-7 w-7" aria-hidden>
          <rect width="48" height="48" rx="14" fill="#25D366" />
          <path
            d="M24 11a12.9 12.9 0 0 0-11 19.6L11.3 37l6.6-1.7A12.9 12.9 0 1 0 24 11Zm7.5 18.2c-.3.9-1.8 1.7-2.5 1.8-.6.1-1.5.1-2.4-.2a21 21 0 0 1-8.7-7.6c-.6-1-1.3-2.5-1.3-4s.8-2.3 1.1-2.6c.3-.3.6-.4.8-.4h.6c.2 0 .5 0 .7.6l1 2.5c.1.2.1.4 0 .6l-.5.7-.4.5c-.2.2-.3.4-.1.7.2.4 1 1.6 2.1 2.6 1.4 1.3 2.6 1.7 3 1.9.3.2.6.1.8-.1l1.1-1.4c.2-.3.5-.3.8-.2l2.4 1.2c.3.2.6.3.6.4.1.2.1.9-.2 1.8Z"
            fill="#fff"
          />
        </svg>
      </a>
    </div>
  );
}
