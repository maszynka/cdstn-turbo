/**
 * @typedef {import('next/image').ImageLoaderProps} ImageLoaderProps
 */

/**
 * Normalize the source URL.
 * Removes the leading slash if it exists.
 *
 * @param {string} src - The source URL to normalize.
 * @returns {string} The normalized URL.
 */
const normalizeSrc = (src) => {
  return src.startsWith("/") ? src.slice(1) : src;
};

/**
 * Cloudflare image loader function for Next.js.
 * Generates a Cloudflare image URL with specified parameters.
 * @param {ImageLoaderProps} props - The image loader props.
 * @returns {string} The generated Cloudflare image URL.
 */
export default function cloudflareLoader(props) {
  const { src, width, quality } = props;
  const params = [`width=${width}`];
  if (quality) {
    params.push(`quality=${quality}`);
  }
  const paramsString = params.join(",");
  const isProd = process.env.NODE_ENV === 'production';

  const urlDomain = isProd ? '' : 'https://cdstn.ovh'; 

  return `${urlDomain}/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`;
}