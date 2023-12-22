import { useState } from "react";

export default function CompanyItem({ company, defaultVisibility }) {
  const [isVisible] = useState(defaultVisibility);

  return (
    <li className="company">
      <p className="company-name">{company.companyName}</p>
      {isVisible && (
        <p className="company-phrase">
          <strong>About:</strong> {company.phrase}
        </p>
      )}
    </li>
  );
}
