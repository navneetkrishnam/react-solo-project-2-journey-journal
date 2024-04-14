import Header from "./header"

import logoImage from "../public/global_icon.png"

const headingText = "my travel journal  ✈"

export default function page() {
    return (
        <Header logo={logoImage} headingText={headingText} />
    )
}