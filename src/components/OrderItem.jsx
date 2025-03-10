import React from "react";

// Components
import StickyCell from "./StickyCell";
import TruncatedCell from "./TruncatedCell";

// Data
import addresses from "@/data/addresses";
import orderStatuses from "@/data/orderStatuses";

// Utils
import {
  extractNumbers,
  formatDate,
  formatTime,
  getPercentageBgColor,
} from "@/utils";
import CopyButton from "./CopyButton";

const OrderItem = ({ data = {}, index = 0, isScrolled }) => {
  const {
    status,
    _id: id,
    oqim_id: stream,
    client_mobile: tel,
    created_at: timestamp,
    courier_id: courierId,
    client_name: firstName,
    operator_id: operatorId,
    client_address: address,
    order_code: orderNumber,
  } = data || {};

  const streamName = stream?.name || "-";

  const formattedAddress =
    addresses.find(({ value }) => value == address)?.name || address;

  const formattedStatus =
    orderStatuses.find(({ value }) => value == status)?.label || status;

  const statusColor =
    orderStatuses.find(({ value }) => value == status)?.color || "black";

  const getLevel = () => {
    let level = 0;

    // Update level
    const addressNumber = Number(address) || -1;
    const firstNameLength = firstName?.length || 0;
    const telLength = extractNumbers(tel)?.length || 0;

    if (telLength === 12 || telLength === 9) level += 20;
    if (addressNumber > 0 && addressNumber < 15) level += 20;
    if (telLength === 12 && firstNameLength > 4) level += 10;
    if (firstNameLength > 3 && firstNameLength < 24) level += 20;
    if (
      telLength === 12 &&
      firstNameLength > 4 &&
      firstNameLength < 18 &&
      addressNumber > 0 &&
      addressNumber < 15
    ) {
      level += 20;
    }
    if (telLength < 8 || !telLength) level = 0;

    return level;
  };

  const level = getLevel();

  return (
    <tr className="group h-12 bg-neutral-50 even:bg-white">
      {/* Index */}
      <StickyCell children={index} isActive={isScrolled} />

      {/* Stream name */}
      <TruncatedCell trunc="2">{streamName}</TruncatedCell>

      {/* Status */}
      <td style={{ color: statusColor }}>{formattedStatus}</td>

      {/* User */}
      <TruncatedCell>{firstName}</TruncatedCell>

      {/* Order number */}
      <TruncatedCell>
        <CopyButton
          notificationText="Ma'lumotlardan nusxa olindi"
          text={`**📦 Buyrtma ${orderNumber}**\n\n👤 **Foydalanuvchi:** ${firstName}\n📍 **Manzil:** ${formattedAddress}\n🆔 **ID:** \`${id}\`\n👩‍💻 **Operator ID:** \`${operatorId}\`\n🛵 **Yetkauvchi ID:** \`${courierId}\`\n⏰ **Vaqt:** ${formatDate(
            timestamp
          )} ${formatTime(timestamp)}`}
        >
          {id}
        </CopyButton>
      </TruncatedCell>

      {/* Address */}
      <td>
        <address>{formattedAddress || "Mavjud emas!"}</address>
      </td>

      {/* Date */}
      <td>{formatDate(timestamp)}</td>

      <td>
        <div
          className={`${getPercentageBgColor(
            level
          )} flex items-center justify-center w-11 h-6 m-auto rounded-full text-white text-sm`}
        >
          {level}%
        </div>
      </td>
    </tr>
  );
};

export default OrderItem;
