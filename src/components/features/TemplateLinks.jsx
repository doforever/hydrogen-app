import {Link} from '@shopify/hydrogen';

export default function TemplateLinks({firstProductPath, firstCollectionPath}) {
  return (
    <div className="bg-white p-12 md:p-12 shadow-xl rounded-xl text-gray-900">
      <p className="text-md font-medium uppercase mb-4">
        Explore the templates
      </p>
      <ul>
        <li className="mb-4">
          <Link
            to={`/collections/${firstCollectionPath}`}
            className="text-md font-medium text-blue-700 hover:underline"
          >
            Collection template
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to={`/products/${firstProductPath}`}
            className="text-md font-medium text-blue-700 hover:underline"
          >
            Product template
          </Link>
        </li>
        <li>
          <Link
            to="/error-page"
            className="text-md font-medium text-blue-700 hover:underline"
          >
            404 template
          </Link>
        </li>
      </ul>
    </div>
  );
}
