"use client";

import { useRef } from "react";
import { motion, useInView, cubicBezier } from "framer-motion";
import Link from "next/link";

const ease = cubicBezier(0.76, 0, 0.24, 1);

type Review = {
  id: string;
  name: string;
  role: string;
  review: string;
  rating: number;
  time: string;
  avatar: string;
};

const reviews: Review[] = [
  {
    id: "1",
    name: "Rajesh Mehta",
    role: "Business Owner",
    review:
      "Ridge Studio transformed our office into something extraordinary. Every detail was intentional — clients notice it the moment they walk in.",
    rating: 5,
    time: "2 weeks ago",
    avatar: "RM",
  },
  {
    id: "2",
    name: "Priya Shah",
    role: "Homeowner",
    review:
      "Our dream home exceeded every expectation. The process was seamless and they genuinely listened. The result is simply stunning.",
    rating: 5,
    time: "1 month ago",
    avatar: "PS",
  },
  {
    id: "3",
    name: "Vikram Patel",
    role: "Real Estate Developer",
    review:
      "As a developer I need partners who understand both aesthetics and deadlines. Ridge Studio delivered on both. Highly recommended.",
    rating: 5,
    time: "3 weeks ago",
    avatar: "VP",
  },
  {
    id: "4",
    name: "Sneha Kapoor",
    role: "Interior Design Enthusiast",
    review:
      "The bespoke furniture they designed is the centerpiece of our home. Custom proportions, premium finish. Worth every rupee.",
    rating: 5,
    time: "2 months ago",
    avatar: "SK",
  },
  {
    id: "5",
    name: "Nisha Joshi",
    role: "Restaurant Owner",
    review:
      "Our restaurant has become a talking point in the city. Ridge Studio understood our brand vision and created something truly unforgettable.",
    rating: 5,
    time: "1 month ago",
    avatar: "NJ",
  },
  {
    id: "6",
    name: "Arjun Desai",
    role: "Corporate Client",
    review:
      "The renovation of our office lobby was completed on time and on budget. The design is clean, modern, and our employees love it.",
    rating: 5,
    time: "3 months ago",
    avatar: "AD",
  },
  {
    id: "7",
    name: "Kavita Sharma",
    role: "Villa Owner",
    review:
      "Ridge Studio handled our complete villa interior. The attention to lighting, material, and proportion is on another level entirely.",
    rating: 5,
    time: "2 months ago",
    avatar: "KS",
  },
  {
    id: "8",
    name: "Manish Trivedi",
    role: "Clinic Owner",
    review:
      "They designed our medical clinic with a calm, professional aesthetic. Patients always compliment the space. Phenomenal work.",
    rating: 5,
    time: "5 weeks ago",
    avatar: "MT",
  },
];

const row1 = reviews.slice(0, 4);
const row2 = reviews.slice(4, 8);

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <span key={i} className="text-[#FBBC04] text-sm leading-none">
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="w-[320px] md:w-90 shrink-0 bg-white border rounded-2xl border-[#2C2C2C]/08 p-6 flex flex-col gap-4 mx-3 shadow-sm">
      {/* Top row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="w-10 h-10 bg-[#1f4f3f] flex items-center justify-center shrink-0">
            <span className="text-[#F5F0E8] text-xs font-bold tracking-wider">
              {review.avatar}
            </span>
          </div>
          <div>
            <p className="text-[#2C2C2C] text-sm font-semibold leading-tight">
              {review.name}
            </p>
            <p className="text-[#2C2C2C]/40 text-[11px] tracking-wide">
              {review.role}
            </p>
          </div>
        </div>
        {/* Google G */}
        <svg
          className="w-5 h-5 shrink-0"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
      </div>

      <StarRating rating={review.rating} />

      <p className="text-[#2C2C2C]/70 text-sm leading-relaxed flex-1">
        {'"'}
        {review.review}
        {'"'}
      </p>

      <p className="text-[#2C2C2C]/25 text-[10px] tracking-[0.2em] uppercase">
        {review.time}
      </p>
    </div>
  );
}

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: Review[];
  reverse?: boolean;
}) {
  const doubled = [...items, ...items, ...items];

  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex"
        animate={{ x: reverse ? ["0%", "33.33%"] : ["0%", "-33.33%"] }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {doubled.map((review, i) => (
          <ReviewCard key={`${review.id}-${i}`} review={review} />
        ))}
      </motion.div>
    </div>
  );
}

export default function GoogleReviews() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section className="w-full bg-[#1f4f3f] overflow-hidden">
      {/* Header */}
      <div
        ref={headerRef}
        className="px-10 md:px-16 xl:px-24 pt-24 pb-16 border-b border-[#F5F0E8]/10"
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -16 }}
              animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, ease }}
            >
              <span className="h-px w-8 bg-[#F5F0E8]/30" />
              <span className="text-[#F5F0E8]/40 text-[10px] tracking-[0.4em] uppercase font-medium">
                Client Reviews
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h2
                className="text-[clamp(2.4rem,5.5vw,4.5rem)] font-bold text-[#F5F0E8] leading-none tracking-tight"
                initial={{ y: "110%" }}
                animate={isHeaderInView ? { y: "0%" } : {}}
                transition={{ duration: 0.85, delay: 0.15, ease }}
              >
                What Clients Say
              </motion.h2>
            </div>
          </div>

          {/* Google Rating Hero */}
          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35, ease }}
          >
            {/* Big rating */}
            <div className="flex flex-col items-center">
              <span className="text-6xl font-black text-[#F5F0E8] leading-none">
                4.9
              </span>
              <div className="flex gap-0.5 mt-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-[#FBBC04] text-xl">
                    ★
                  </span>
                ))}
              </div>
              <span className="text-[#F5F0E8]/40 text-[10px] tracking-[0.25em] uppercase mt-1.5 font-medium">
                Google Rating
              </span>
            </div>

            <div className="w-px h-16 bg-[#F5F0E8]/10" />

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <span className="text-[#F5F0E8] text-sm font-semibold">
                  Google Reviews
                </span>
              </div>
              <span className="text-[#F5F0E8]/50 text-sm">
                120+ verified reviews
              </span>
              <a
                href="https://g.page/ridgestudioarchitects"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5F0E8]/70 text-xs tracking-[0.2em] uppercase font-semibold underline underline-offset-4 hover:opacity-100 transition-opacity duration-200 mt-1"
              >
                View on Google →
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee rows */}
      <div className="py-12 flex flex-col gap-5">
        {/* Edge fades */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-[#1f4f3f] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-[#1f4f3f] to-transparent z-10 pointer-events-none" />
          <MarqueeRow items={row1} reverse={false} />
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-[#1f4f3f] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-[#1f4f3f] to-transparent z-10 pointer-events-none" />
          <MarqueeRow items={row2} reverse={true} />
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="px-10 md:px-16 xl:px-24 pb-16 pt-4 border-t border-[#F5F0E8]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-[#F5F0E8]/35 text-sm font-light">
          Join 120+ satisfied clients across Gujarat.
        </p>
        <Link
          href="https://g.page/ridgestudioarchitects/review"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 border border-[#F5F0E8]/40 px-7 py-3.5 hover:bg-[#F5F0E8] transition-colors duration-300"
        >
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          <span className="text-[#F5F0E8] group-hover:text-[#1f4f3f] text-xs tracking-[0.22em] uppercase font-bold transition-colors duration-300">
            Leave a Review
          </span>
        </Link>
      </motion.div>
    </section>
  );
}
