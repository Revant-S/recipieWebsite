export function getName(queryparam) {
  const paramValue = queryparam.substring(1);
  const decodedValue = decodeURIComponent(paramValue);
  return decodedValue;
}
