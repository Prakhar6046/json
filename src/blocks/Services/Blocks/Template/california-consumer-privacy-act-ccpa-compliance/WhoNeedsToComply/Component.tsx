import React from 'react';

interface Props {
  data?: {
    title?: string;
    description?: string;
    items?: { number?: string; text?: string }[];
    backgroundImage?: { url?: string };
  };
}

const WhoNeedsToComplyComponent: React.FC<Props> = ({ data }) => {
  if (!data) return null;
  return (
    <section
      className={`bg-[url("${data?.backgroundImage?.url || ""}")] bg-no-repeat bg-cover bg-left sm:bg-center before:bg-black/50 before:absolute before:top-0 before:left-0 before:w-full before:h-full relative`}
    >
      <div className="container mx-auto px-4 py-8 sm:py-14 lg:py-20 z-10 relative">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <div className="sm:col-span-3 lg:col-span-6"></div>

          <div className="sm:col-span-9 lg:col-span-6">
            <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 lg:mb-6">
              {data?.title || "Who needs to comply?"}
            </h2>

            {data.description && <p className="text-white">{data.description}</p>}

            {Array.isArray(data.items) && (
              <div className="mt-8">
                <ul className="flex flex-col gap-8 before:w-0.5 before:h-10/12 before:bg-white before:absolute before:left-6 before:-z-10 before:top-1/2 before:-translate-y-1/2 relative">
                  {data.items.map((item, index) => (
                    <li key={index} className="flex items-center gap-4 text-white">
                      <div className="bg-(--wils_orang) rounded-full p-4 font-bold size-[50px] flex items-center justify-center">
                        {item?.number}
                      </div>
                      <p dangerouslySetInnerHTML={{ __html: item?.text || "" }} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoNeedsToComplyComponent;
