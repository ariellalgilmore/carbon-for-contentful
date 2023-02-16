/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import dynamic from "next/dynamic";
import DDSContentGroupPictograms from "@carbon/ibmdotcom-web-components/es/components-react/content-group-pictograms/content-group-pictograms";
import DDSContentGroupHeading from "@carbon/ibmdotcom-web-components/es/components-react/content-group/content-group-heading";
import DDSContentGroupCopy from "@carbon/ibmdotcom-web-components/es/components-react/content-group/content-group-copy";

// TODO: check if this should be DDSTextCTA
const PictogramItem = dynamic(import("./PictogramItem"), { ssr: false });


export default function ContentGroupPictograms(content) {
  const { heading, copy, pictogramItems } = content?.fields || {};

  return (
    <DDSContentGroupPictograms>
      <DDSContentGroupHeading>{heading}</DDSContentGroupHeading>
      {copy && <DDSContentGroupCopy>{copy}</DDSContentGroupCopy>}
      {pictogramItems?.map((child, index) => {
        return (
          <PictogramItem key={index} {...child}/>
        );
      })}
    </DDSContentGroupPictograms>
  );
}
