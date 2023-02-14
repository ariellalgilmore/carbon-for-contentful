/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import DDSLinkList from "@carbon/ibmdotcom-web-components/es/components-react/link-list/link-list";
import DDSLinkListHeading from "@carbon/ibmdotcom-web-components/es/components-react/link-list/link-list-heading";
import DDSLinkListItemCard from "@carbon/ibmdotcom-web-components/es/components-react/link-list/link-list-item-card";
import DDSLinkListItemCardCTA from "@carbon/ibmdotcom-web-components/es/components-react/cta/link-list-item-card-cta";
import DDSLinkListItem from "@carbon/ibmdotcom-web-components/es/components-react/link-list/link-list-item";
import DDSLinkListItemCTA from "@carbon/ibmdotcom-web-components/es/components-react/cta/link-list-item-cta";
import DDSCardFooter from "@carbon/ibmdotcom-web-components/es/components-react/card/card-footer";
import DDSCardCTAFooter from "@carbon/ibmdotcom-web-components/es/components-react/cta/card-cta-footer";
import ArrowRight20 from "@carbon/icons-react/es/arrow--right/20.js";

export default function LinkList(content) {
  const {
    type,
    heading,
    linkListItemCards,
    linkListItemCardCTAs,
    linkListItems,
    linkListItemCTAs
  } = content?.fields || {};
  return (
    <DDSLinkList
      type={type}
    >
      <DDSLinkListHeading>{heading}</DDSLinkListHeading>
      {linkListItemCards && linkListItemCards?.map((child, index) => {
        const { href, copy } = child.fields;
        return (
          <DDSLinkListItemCard href={href} key={index}>
            <p>{copy}</p>
            <DDSCardFooter>
              <ArrowRight20 slot="icon" />
            </DDSCardFooter>
          </DDSLinkListItemCard>
        )
      })}
      {linkListItemCardCTAs && linkListItemCardCTAs?.map((child, index) => {
        const { href, ctaType, download, copy} = child.fields;
        return (
          <DDSLinkListItemCardCTA
          href={href}
          cta-type={ctaType}
          download={download}
          key={index}>
            {ctaType !== 'video' ? <p>{copy}</p> : ``}
            <DDSCardCTAFooter></DDSCardCTAFooter>
          </DDSLinkListItemCardCTA>
        )
      })}
      {linkListItems && linkListItems?.map((child, index) => {
        const { href, copy, iconPlacement } = child.fields;
        return (
          <DDSLinkListItem
          icon-placement={iconPlacement}
          href={href}
          key={index}
          >
            {copy}<ArrowRight20 slot="icon" />
          </DDSLinkListItem>
        )
      })}
      {linkListItemCTAs && linkListItemCTAs?.map((child, index) => {
        const { href, copy, iconPlacement, ctaType, download } = child.fields;
        return (
          <DDSLinkListItemCTA
          icon-placement={iconPlacement}
          href={href}
          cta-type={ctaType}
          download={download}
          key={index}>
            {ctaType !== 'video' ? copy : ``}
          </DDSLinkListItemCTA>
        )
      })}
    </DDSLinkList>
      
  );
}
