export const WINDOWS_HOSTS_PATH = "C:/Windows/System32/drivers/etc/hosts";
export const LINUX_HOSTS_PATH = "/etc/hosts";
export const MACOS_HOSTS_PATH = "/etc/hosts";

export const HOSTRIX_SECTION_START = "### HOSTRIX-SECTION-START";
export const HOSTRIX_SECTION_END = "### HOSTRIX-SECTION-END";
export const HOSTRIX_SECTION_REGEX = RegExp(
  `${HOSTRIX_SECTION_START}([\\s\\S]*?)${HOSTRIX_SECTION_END}`,
  "g",
);

export const WINDOWS_HOSTS_UPDATE_COMMAND = "";
export const LINUX_HOSTS_UPDATE_COMMAND = "";
export const MACOS_HOSTS_UPDATE_COMMAND = "";
