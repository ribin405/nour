import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { teachers } from "@/content/teachers";
import { getWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Teachers",
  description: "Meet the one-to-one teachers at Noor Islamic Academy.",
};

export default function TeachersPage() {
  return (
    <>
      <PageHero
        kicker="Our Faculty"
        title="Meet Your Teachers"
        description="Every class is one-to-one with a dedicated teacher. [PLACEHOLDER: profiles below use illustrative sample data pending the academy's approved teacher bios and photos.]"
      />

      <section className="w-full py-space-3xl px-gutter-mobile lg:px-gutter-desktop bg-surface">
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {teachers.map((teacher) => (
            <div
              key={teacher.slug}
              className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-square bg-surface-container">
                <Image
                  src={teacher.photo}
                  alt={`Portrait of ${teacher.name}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute bottom-3 left-3 bg-primary text-on-primary px-space-xs py-space-3xs rounded-md font-label-sm text-label-sm font-bold">
                  {teacher.badge}
                </div>
              </div>
              <div className="p-space-md flex flex-col gap-space-sm flex-1 justify-between">
                <div className="flex flex-col gap-space-2xs">
                  <h3 className="font-title-lg text-title-lg text-primary">{teacher.name}</h3>
                  <p className="font-label-sm text-label-sm text-secondary font-bold">{teacher.role}</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{teacher.bio}</p>
                </div>
                <div className="pt-space-xs flex flex-col gap-space-xs">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">{teacher.languages}</span>
                  <a
                    href={getWhatsAppLink(whatsappMessages.teacher(teacher.name))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-space-2xs bg-primary hover:bg-primary-container text-on-primary py-space-xs rounded-xl font-label-sm text-label-sm transition-colors"
                  >
                    <span className="material-symbols-outlined text-label-sm">chat</span>
                    Ask About {teacher.name.split(" ")[0]}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
