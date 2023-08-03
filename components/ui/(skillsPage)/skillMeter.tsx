/**
 *
 * Beginner/Beginner Level: Yeni başlayan seviyesi. Teknolojiyle yeni tanışan veya temel bilgilere sahip olanlar bu seviyededir.
 *
 * Intermediate/Intermediate Level: Orta düzey seviyesi. Temel bilgilere sahip olan ve teknolojiyi kullanabilen, daha fazla deneyim kazanmış kişiler bu seviyededir.
 *
 * Advanced/Advanced Level: İleri düzey seviyesi. Teknolojiyi çok iyi bilen, karmaşık problemleri çözebilen ve geniş tecrübeye sahip olan kişiler bu seviyededir.
 *
 * Expert/Expert Level: Uzman seviyesi. Teknoloji hakkında derin bilgiye ve uzmanlığa sahip olan, karmaşık projelerde liderlik yapabilen kişiler bu seviyededir.
 */

export default function SkillMeter({ skillLevel = 0 }: { skillLevel: number }) {
  const width = skillLevel * 25 + "%";

  const color = [
    "bg-amber-400",
    "bg-green-400",
    "bg-blue-400",
    "bg-purple-400",
  ];

  const textColor = [
    "text-amber-400",
    "text-green-400",
    "text-blue-400",
    "text-purple-400",
  ];

  const text = [
    "Begineer Level",
    "Intermediate Level",
    "Advanced Level",
    "Expert Level",
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <div className="bg-gray-300 rounded-full w-full h-[20px] overflow-hidden">
        <div
          className={color[skillLevel - 1] + " h-full rounded-full"}
          style={{ width: width }}
        />
      </div>
      <p className={"font-thin  " + textColor[skillLevel - 1]}>
        {text[skillLevel - 1]}
      </p>
    </div>
  );
}
