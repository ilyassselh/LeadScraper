import { Prospect } from "@/types";

export const mockProspects: Prospect[] = [
  {
    id: "1",
    search_id: "s1",
    company_name: "Boulangerie du Marché",
    phone: "01 42 56 78 90",
    website: null,
    google_rating: 4.6,
    review_count: 87,
    address: "12 Rue de Rivoli, 75001 Paris",
    status: "Nouveau",
    performance_score: null,
    seo_score: null,
    is_responsive: null,
    ai_pitch:
      "La Boulangerie du Marché est très bien notée mais n'a aucune présence en ligne. En leur créant un site vitrine optimisé, vous leur offrez un canal d'acquisition direct. Avec 87 avis positifs, le bouche-à-oreille fonctionne déjà : un site web amplifiera leur visibilité et captera les recherches locales.",
    ai_script_call:
      "Bonjour, je m'appelle [Prénom]. Je vous appelle parce que j'ai remarqué que vous avez 87 avis Google très positifs, mais pas de site web. Imaginez si chaque personne qui vous cherche sur Google arrivait directement sur une vitrine qui reflète votre qualité. On peut vous créer un site en 5 jours, sans que vous ayez à gérer quoi que ce soit. Est-ce que vous avez 2 minutes pour que je vous montre un exemple ?",
    ai_email:
      "Objet : 87 avis Google et aucune vitrine en ligne ?\n\nBonjour,\n\nJe suis tombé sur votre boulangerie via Google Maps : 4,6 étoiles et 87 avis, bravo.\n\nMais j'ai remarqué que vous n'avez pas de site web. C'est dommage car chaque recherche \"boulangerie Paris 1er\" vous échappe.\n\nJe vous propose un site vitrine clé en main, livré en 5 jours, sans engagement.\n\nVous voulez voir un exemple de ce qu'on peut faire ?\n\nBelle journée,\n[Signature]",
    created_at: "2026-06-10T09:00:00Z",
  },
  {
    id: "2",
    search_id: "s1",
    company_name: "Garage Central Auto",
    phone: "01 45 67 12 34",
    website: "https://garage-central.fr",
    google_rating: 4.2,
    review_count: 134,
    address: "45 Avenue des Ternes, 75017 Paris",
    status: "Nouveau",
    performance_score: 28,
    seo_score: 15,
    is_responsive: false,
    ai_pitch:
      "Le Garage Central Auto a un site mais il est techniquement défaillant : lent, non responsive et quasi invisible sur Google. Avec 134 avis positifs, le potentiel est énorme. Refondre leur site leur apporterait immédiatement plus de clients.",
    ai_script_call:
      "Bonjour, je m'appelle [Prénom]. J'ai regardé votre site web et honnêtement, il ne reflète pas la qualité de votre garage. Vous avez 134 avis clients excellents, mais votre site est invisible sur mobile et très lent. Résultat : vous perdez des clients chaque jour. On peut vous livrer un site moderne, rapide et optimisé SEO en 5 jours. Je vous montre un exemple ?",
    ai_email:
      "Objet : Votre site web vous fait perdre des clients\n\nBonjour,\n\n134 avis Google positifs, c'est impressionnant. Mais votre site actuel ne convertit pas : il est lent et illisible sur mobile.\n\nJe vous propose une refonte complète, livrée en 5 jours, optimisée SEO et responsive.\n\nVous voulez qu'on en discute 10 minutes ?\n\nBelle journée,\n[Signature]",
    created_at: "2026-06-10T09:30:00Z",
  },
  {
    id: "3",
    search_id: "s1",
    company_name: "Institut Beauté & Spa",
    phone: "01 56 78 90 12",
    website: "https://institut-beaute-spa.fr",
    google_rating: 4.8,
    review_count: 203,
    address: "8 Rue du Faubourg Saint-Honoré, 75008 Paris",
    status: "Appelé",
    performance_score: 45,
    seo_score: 62,
    is_responsive: true,
    ai_pitch:
      "L'Institut Beauté & Spa a un site fonctionnel mais son SEO est moyen et son design semble daté. Malgré 203 avis et une note de 4.8, leur présence en ligne ne reflète pas leur standing. Un redesign premium les positionnerait comme la référence du quartier.",
    ai_script_call:
      "Bonjour [Nom du contact], je vous ai appelé la semaine dernière. Votre institut a une réputation exceptionnelle — 4.8 étoiles et 203 avis. Mais votre site actuel ne met pas assez en valeur ce standing. J'ai préparé une maquette de ce à quoi pourrait ressembler un site premium pour vous. On peut en parler 5 minutes ?",
    ai_email:
      "Objet : Un site à la hauteur de vos 4.8 étoiles ?\n\nBonjour,\n\nVotre institut mérite un site qui reflète son excellence. 4.8 étoiles et 203 avis, c'est rare. Mais votre site actuel est en dessous de ce que vous proposez.\n\nJe peux vous montrer en 10 minutes à quoi ressemblerait un site premium pour votre spa.\n\nIntéressée ?\n\nBelle journée,\n[Signature]",
    created_at: "2026-06-10T10:00:00Z",
  },
  {
    id: "4",
    search_id: "s1",
    company_name: "Pharmacie Saint-Louis",
    phone: "01 42 33 44 55",
    website: null,
    google_rating: 4.3,
    review_count: 56,
    address: "22 Rue Saint-Louis en l'Île, 75004 Paris",
    status: "Pas intéressé",
    performance_score: null,
    seo_score: null,
    is_responsive: null,
    ai_pitch:
      "La Pharmacie Saint-Louis a refusé le contact, mais le potentiel reste fort : aucune présence en ligne, 56 avis, un emplacement privilégié. Un suivi dans 3 mois pourrait être pertinent.",
    ai_script_call:
      "Bonjour, je comprends que vous n'étiez pas intéressée la dernière fois. Je voulais juste vous laisser ma carte au cas où vous changeriez d'avis. Les pharmacies du quartier qui ont un site captent 30% de clients en plus via Google. Je reste disponible.",
    ai_email:
      "Objet : Juste une carte de visite\n\nBonjour,\n\nJe comprends votre position. Je vous laisse mes coordonnées au cas où.\n\nSi un jour vous voulez attirer plus de clients via Google, je suis là.\n\nBelle journée,\n[Signature]",
    created_at: "2026-06-10T10:30:00Z",
  },
  {
    id: "5",
    search_id: "s1",
    company_name: "Café des Artistes",
    phone: "01 44 55 66 77",
    website: "https://cafe-des-artistes.fr",
    google_rating: 4.5,
    review_count: 312,
    address: "5 Place du Tertre, 75018 Paris",
    status: "Nouveau",
    performance_score: 18,
    seo_score: 22,
    is_responsive: false,
    ai_pitch:
      "Le Café des Artistes cumule les problèmes : site lent, non responsive, SEO catastrophique. Pourtant ils ont 312 avis et 4.5 étoiles. C'est le prospect parfait : le trafic existe, il suffit de le convertir. Score opportunité maximal.",
    ai_script_call:
      "Bonjour, je m'appelle [Prénom]. 312 avis Google et 4.5 étoiles : votre café est une référence à Montmartre. Mais votre site actuel est tellement lent que les clients partent avant même de voir votre carte. On peut corriger ça en 5 jours. Vous avez 5 minutes pour que je vous montre ?",
    ai_email:
      "Objet : 312 avis, un site qui vous dessert\n\nBonjour,\n\nVotre café est une institution : 4.5 étoiles, 312 avis. Mais votre site web est un goulot d'étranglement : lent et illisible sur mobile.\n\nJe vous propose un site qui convertit ce trafic en clients, livré en 5 jours.\n\nOn s'appelle ?\n\nBelle journée,\n[Signature]",
    created_at: "2026-06-10T11:00:00Z",
  },
];

export function getProspectById(id: string): Prospect | undefined {
  return mockProspects.find((p) => p.id === id);
}
