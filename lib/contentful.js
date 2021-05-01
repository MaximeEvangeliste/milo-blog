const { BLOCKS, MARKS } = require('@contentful/rich-text-types');
const { documentToHtmlString } = require('@contentful/rich-text-html-renderer');

const contentfulPostSectionsToHTML = (sections) => {
  let content = '';

  sections.items.forEach((item) => {
    const notEmptyEntries = Object.entries(item).filter(([type, value]) => {
      if (type === 'twoImages') {
        return value.items.length > 0;
      }
      return !!value;
    });

    notEmptyEntries.forEach(([type, value]) => {
      switch (type) {
        case 'subTitle': {
          content += `<h2>${value}</h2>`;
          return;
        }
        case 'text': {
          const options = {
            renderMark: {
              [MARKS.BOLD]: (text) => `<bold>${text}</bold>`,
            },
            renderNode: {
              [BLOCKS.PARAGRAPH]: (node, next) =>
                `<p>${next(node.content)}</p>`,
            },
          };

          const rendered = documentToHtmlString(value.json, options);
          content += `${rendered}\n\n`;
          return;
        }
        case 'quote': {
          content += `<quote>${value}</quote>`;
          return;
        }
        case 'image': {
          content += `<img class="w-3/5 m-auto block" alt="${
            value.description || value.title
          }" src="${value.url}" title="${value.title}"/>`;
          return;
        }
        case 'twoImages': {
          content += `<div class="flex justify-around">
          <img class="w-6/12 m-1" alt="${
            value.items[0].description || value.items[0].title
          }" src="${value.items[0].url}" title="${value.items[0].title}"/>
          <img class="w-6/12 m-1" alt="${
            value.items[1].description || value.items[1].title
          }" src="${value.items[1].url}" title="${value.items[1].title}"/>
          </div>`;
          return;
        }
        default: {
          return null;
        }
      }
    });
  });

  return content;
};

const transformContentfulPostToStandardPost = (contentfulPost) => {
  return {
    title: contentfulPost?.title,
    description: contentfulPost?.description,
    mainImage: {
      title: contentfulPost?.mainImage?.title || '',
      description: contentfulPost?.mainImage?.description || '',
      url: contentfulPost?.mainImage?.url || '',
    },
    metaTags: contentfulPost?.metaTags || null,
    author: {
      name: contentfulPost?.author?.name,
      image: {
        title: contentfulPost?.author?.picture?.title,
        description: contentfulPost?.author?.picture?.description,
        url: contentfulPost?.author?.picture?.url,
      },
    },
    date: contentfulPost?.orderDate,
    slug: contentfulPost?.slug,
    sections: contentfulPost?.sections || null,
  };
};

module.exports = {
  contentfulPostSectionsToHTML,
  transformContentfulPostToStandardPost,
};
