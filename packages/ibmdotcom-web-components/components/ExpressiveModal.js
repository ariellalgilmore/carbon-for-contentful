/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import DDSExpressiveModal from "@carbon/ibmdotcom-web-components/es/components-react/expressive-modal/expressive-modal";
import DDSExpressiveModalHeader from "@carbon/ibmdotcom-web-components/es/components-react/expressive-modal/expressive-modal-header";
import DDSExpressiveModalCloseButton from "@carbon/ibmdotcom-web-components/es/components-react/expressive-modal/expressive-modal-close-button";
import DDSExpressiveModalHeading from "@carbon/ibmdotcom-web-components/es/components-react/expressive-modal/expressive-modal-heading";
import DDSExpressiveModalBody from "@carbon/ibmdotcom-web-components/es/components-react/expressive-modal/expressive-modal-body";
import DDSExpressiveModalFooter from "@carbon/ibmdotcom-web-components/es/components-react/expressive-modal/expressive-modal-footer";
import DDSButtonExpressive from "@carbon/ibmdotcom-web-components/es/components-react/button/button";
import ArrowRight20 from "@carbon/icons-react/es/arrow--right/20.js";

export default function ExpressiveModal(content) {
  const { heading, copy, buttonText, open, size } = content?.fields || {};
  return (
    <DDSExpressiveModal open={open} expressive-size={size}>
      <DDSExpressiveModalHeader>
      <DDSExpressiveModalCloseButton></DDSExpressiveModalCloseButton>
      <DDSExpressiveModalHeading>{heading}</DDSExpressiveModalHeading>
    </DDSExpressiveModalHeader>
    <DDSExpressiveModalBody>
    {copy}
    </DDSExpressiveModalBody>
    <DDSExpressiveModalFooter>
      <DDSButtonExpressive>
        {buttonText} <ArrowRight20 slot="icon" />
      </DDSButtonExpressive>
    </DDSExpressiveModalFooter>
  </DDSExpressiveModal>
  );
}
