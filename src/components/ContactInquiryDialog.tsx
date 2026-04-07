"use client";

import * as React from "react";
import { createPortal } from "react-dom";

type ContactInquiryDialogProps = {
  trigger: React.ReactElement<React.ButtonHTMLAttributes<HTMLButtonElement>>;
};

const formationOptions = [
  "Développement Web / Full Stack - BTS SIO",
  "Data & IA",
  "Cybersécurité",
  "Je ne sais pas encore",
];

export function ContactInquiryDialog({ trigger }: ContactInquiryDialogProps) {
  const [open, setOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const dialogRef = React.useRef<HTMLDivElement>(null);
  const previousFocusRef = React.useRef<HTMLElement | null>(null);
  const titleId = React.useId();
  const descriptionId = React.useId();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!open) {
      return;
    }

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.requestAnimationFrame(() => {
      const firstInput = dialogRef.current?.querySelector<HTMLElement>(
        "input, select, textarea, button",
      );
      firstInput?.focus();
    });

    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocusRef.current?.focus();
    };
  }, [open]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setOpen(false);
  }

  function handleDialogKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      setOpen(false);
      return;
    }

    if (event.key !== "Tab") {
      return;
    }

    const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );

    if (!focusableElements?.length) {
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  const triggerElement = React.cloneElement(trigger, {
    onClick: (event) => {
      trigger.props.onClick?.(event);

      if (!event.defaultPrevented) {
        setOpen(true);
      }
    },
  });

  return (
    <>
      {triggerElement}
      {mounted && open
        ? createPortal(
            <div
              className="contact-dialog-overlay"
              onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                  setOpen(false);
                }
              }}
            >
              <div
                ref={dialogRef}
                className="contact-dialog-content"
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                aria-describedby={descriptionId}
                onKeyDown={handleDialogKeyDown}
              >
                <button
                  type="button"
                  className="contact-dialog-close"
                  aria-label="Fermer la modale"
                  onClick={() => setOpen(false)}
                >
                  ×
                </button>

                <div className="contact-dialog-header">
                  <h2 id={titleId} className="contact-dialog-title">
                    Demande de renseignements
                  </h2>
                  <p id={descriptionId} className="contact-dialog-description">
            Indiquez vos coordonnées et la formation qui vous intéresse. Nous
            reviendrons vers vous rapidement.
                  </p>
                </div>

                <form className="contact-dialog-form" onSubmit={handleSubmit}>
                  <div className="contact-dialog-field">
                    <label htmlFor="contact-full-name">Nom complet</label>
                    <input
                      id="contact-full-name"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="contact-dialog-grid">
                    <div className="contact-dialog-field">
                      <label htmlFor="contact-email">Email</label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                      />
                    </div>

                    <div className="contact-dialog-field">
                      <label htmlFor="contact-phone">Téléphone</label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        required
                      />
                    </div>
                  </div>

                  <div className="contact-dialog-field">
                    <label htmlFor="contact-formation">
                      Formation souhaitée
                    </label>
                    <select id="contact-formation" name="formation" required>
                      <option value="">Sélectionnez une formation</option>
                      {formationOptions.map((formation) => (
                        <option key={formation} value={formation}>
                          {formation}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="contact-dialog-field">
                    <label htmlFor="contact-message">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      placeholder="Votre demande, vos disponibilités ou vos questions..."
                      required
                    />
                  </div>

                  <div className="contact-dialog-actions">
                    <button
                      type="button"
                      className="contact-dialog-button secondary"
                      onClick={() => setOpen(false)}
                    >
                      Fermer
                    </button>
                    <button type="submit" className="contact-dialog-button primary">
                      Envoyer
                    </button>
                  </div>
                </form>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
