export default function StorefrontInfo({
  shopName,
  shopDomain,
  totalProducts,
  totalCollections,
}) {
  const pluralize = (count, noun, suffix = 's') =>
    `${count} ${noun}${count === 1 ? '' : suffix}`;
  const adminUrl = `${shopDomain}/admin`;

  return (
    <div className="bg-white p-12 shadow-xl rounded-xl text-gray-900">
      <p className="text-md font-medium uppercase mb-4">Connected Storefront</p>
      <h2 className="text-2xl font-bold mb-4">{shopName}</h2>
      <p className="text-md">
        {pluralize(totalProducts, 'Product')}
        {', '}
        {pluralize(totalCollections, 'Collection')}
      </p>
      <hr className="my-4" />
      <a
        href={adminUrl}
        className="text-md inline-flex items-center text-blue-700 font-medium hover:underline"
        target="_blank"
        rel="noreferrer"
      >
        Shopify admin
      </a>
    </div>
  );
}
