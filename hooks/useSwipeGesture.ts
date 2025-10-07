"use client";

import { useEffect, useRef } from 'react';

interface SwipeGestureOptions {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  onTouchStart?: () => void;
  onTouchEnd?: () => void;
  minSwipeDistance?: number;
  preventScroll?: boolean;
}

export const useSwipeGesture = <T extends HTMLElement>({
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  onTouchStart,
  onTouchEnd,
  minSwipeDistance = 50,
  preventScroll = false,
}: SwipeGestureOptions) => {
  const elementRef = useRef<T>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const touchEndRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleTouchStart = (e: TouchEvent) => {
      if (preventScroll) {
        e.preventDefault();
      }
      
      const touch = e.touches[0];
      touchStartRef.current = { x: touch.clientX, y: touch.clientY };
      touchEndRef.current = null;
      onTouchStart?.();
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (preventScroll) {
        e.preventDefault();
      }
      
      const touch = e.touches[0];
      touchEndRef.current = { x: touch.clientX, y: touch.clientY };
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (preventScroll) {
        e.preventDefault();
      }
      
      onTouchEnd?.();
      
      if (!touchStartRef.current || !touchEndRef.current) return;

      const deltaX = touchEndRef.current.x - touchStartRef.current.x;
      const deltaY = touchEndRef.current.y - touchStartRef.current.y;
      
      const absDeltaX = Math.abs(deltaX);
      const absDeltaY = Math.abs(deltaY);

      // Determine if it's a horizontal or vertical swipe
      if (absDeltaX > absDeltaY) {
        // Horizontal swipe
        if (absDeltaX > minSwipeDistance) {
          if (deltaX > 0) {
            onSwipeRight?.();
          } else {
            onSwipeLeft?.();
          }
        }
      } else {
        // Vertical swipe
        if (absDeltaY > minSwipeDistance) {
          if (deltaY > 0) {
            onSwipeDown?.();
          } else {
            onSwipeUp?.();
          }
        }
      }

      touchStartRef.current = null;
      touchEndRef.current = null;
    };

    element.addEventListener('touchstart', handleTouchStart, { passive: !preventScroll });
    element.addEventListener('touchmove', handleTouchMove, { passive: !preventScroll });
    element.addEventListener('touchend', handleTouchEnd, { passive: !preventScroll });

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown, onTouchStart, onTouchEnd, minSwipeDistance, preventScroll]);

  return elementRef;
};

// Hook for pinch zoom gestures
export const usePinchZoom = <T extends HTMLElement>({
  onZoomStart,
  onZoom,
  onZoomEnd,
  minScale = 1,
  maxScale = 3,
}: {
  onZoomStart?: () => void;
  onZoom?: (scale: number) => void;
  onZoomEnd?: () => void;
  minScale?: number;
  maxScale?: number;
}) => {
  const elementRef = useRef<T>(null);
  const initialDistanceRef = useRef<number>(0);
  const currentScaleRef = useRef<number>(1);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const getDistance = (touches: TouchList) => {
      if (touches.length < 2) return 0;
      const touch1 = touches[0];
      const touch2 = touches[1];
      return Math.sqrt(
        Math.pow(touch2.clientX - touch1.clientX, 2) +
        Math.pow(touch2.clientY - touch1.clientY, 2)
      );
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        initialDistanceRef.current = getDistance(e.touches);
        onZoomStart?.();
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2 && initialDistanceRef.current > 0) {
        e.preventDefault();
        const currentDistance = getDistance(e.touches);
        const scale = Math.max(minScale, Math.min(maxScale, 
          currentScaleRef.current * (currentDistance / initialDistanceRef.current)
        ));
        onZoom?.(scale);
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (e.touches.length < 2) {
        initialDistanceRef.current = 0;
        onZoomEnd?.();
      }
    };

    element.addEventListener('touchstart', handleTouchStart, { passive: false });
    element.addEventListener('touchmove', handleTouchMove, { passive: false });
    element.addEventListener('touchend', handleTouchEnd, { passive: false });

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [onZoomStart, onZoom, onZoomEnd, minScale, maxScale]);

  return elementRef;
};