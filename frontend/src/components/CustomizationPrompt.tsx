import { useState } from 'react';
import { Paintbrush, X, ChevronRight, Palette, Type, Layout, FileText, Phone } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

const suggestions = [
  { icon: Palette, label: 'Colors & Theme', example: 'e.g. "Use a navy blue and white color scheme"' },
  { icon: Type, label: 'Business Name & Copy', example: 'e.g. "Change the company name to FixIt Fast"' },
  { icon: Layout, label: 'Sections & Layout', example: 'e.g. "Add a testimonials section"' },
  { icon: FileText, label: 'Services Listed', example: 'e.g. "Remove appliance install, add roofing"' },
  { icon: Phone, label: 'Contact Info', example: 'e.g. "Update phone number to (555) 987-6543"' },
];

interface CustomizationPromptProps {
  open: boolean;
  onClose: () => void;
}

export default function CustomizationPrompt({ open, onClose }: CustomizationPromptProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSuggestion = (label: string) => {
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label]
    );
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-lg bg-charcoal border border-charcoal-light text-cream p-0 overflow-hidden">
        {/* Header accent bar */}
        <div className="h-1 w-full bg-amber" />

        <div className="p-6">
          <DialogHeader className="mb-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 bg-amber/20 border border-amber/40 flex items-center justify-center flex-shrink-0">
                <Paintbrush size={18} className="text-amber" />
              </div>
              <DialogTitle className="font-heading text-xl font-bold text-cream tracking-wider uppercase">
                What would you like to change?
              </DialogTitle>
            </div>
            <DialogDescription className="font-body text-cream/60 text-sm leading-relaxed">
              Tell us exactly what you'd like updated — colors, content, layout, services, or anything else. The more specific, the better!
            </DialogDescription>
          </DialogHeader>

          {/* Quick-pick chips */}
          <div className="mb-5">
            <p className="font-body text-xs text-cream/50 uppercase tracking-widest mb-3">
              Common changes — tap to highlight:
            </p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map(({ icon: Icon, label, example }) => {
                const active = selected.includes(label);
                return (
                  <button
                    key={label}
                    onClick={() => toggleSuggestion(label)}
                    title={example}
                    className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-body font-medium tracking-wide border transition-all duration-150 ${
                      active
                        ? 'bg-amber text-charcoal border-amber'
                        : 'bg-charcoal-light/40 text-cream/70 border-charcoal-light hover:border-amber/60 hover:text-amber'
                    }`}
                  >
                    <Icon size={12} />
                    {label}
                  </button>
                );
              })}
            </div>
            {selected.length > 0 && (
              <p className="mt-2 text-xs text-amber/70 font-body">
                Selected: {selected.join(', ')}
              </p>
            )}
          </div>

          {/* Free-text area */}
          <div className="mb-6">
            <label className="block font-body text-xs text-cream/50 uppercase tracking-widest mb-2">
              Describe your changes
            </label>
            <Textarea
              placeholder={
                selected.length > 0
                  ? `Describe the ${selected.join(', ')} changes you'd like…`
                  : 'e.g. "Change the color scheme to navy and white, rename the company to FixIt Fast, and update the phone number to (555) 987-6543"'
              }
              className="bg-charcoal-dark border-charcoal-light text-cream placeholder:text-cream/30 font-body text-sm resize-none focus:border-amber focus:ring-amber/20 min-h-[110px]"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={onClose}
              className="font-body text-sm text-cream/40 hover:text-cream/70 transition-colors"
            >
              Maybe later
            </button>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="border-amber/30 text-amber/70 font-body text-xs hidden sm:flex">
                Just type in the chat below ↓
              </Badge>
              <Button
                onClick={onClose}
                className="bg-amber text-charcoal font-heading font-semibold text-sm tracking-wider uppercase hover:bg-amber-dark flex items-center gap-1.5 px-5"
              >
                Got it
                <ChevronRight size={15} />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
