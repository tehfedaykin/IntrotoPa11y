# Welcome to Pa11y

## Results for www.codemash.org:
* __Notice:__ Check that the title element describes the document.
 * WCAG2AA.Principle2.Guideline2_4.2_4_2.H25.2
 * html > head > title
 * `<title>Home - CodeMash</title>`

* __Notice:__ If an input error is automatically detected in this form, check that the item(s) in error are identified and the error(s) are described to the user in text.
 * WCAG2AA.Principle3.Guideline3_3.3_3_1.G83,G84,G85
 * #wrap > div:nth-child(1) > form
 * `<form> <div> <input type="text...</form>`

* __Notice:__ Check that descriptive labels or instructions (including for required fields) are provided for user input in this form.
 * WCAG2AA.Principle3.Guideline3_3.3_3_2.G131,G89,G184,H90
 * #wrap > div:nth-child(1) > form
 * `<form> <div> <input type="text...</form>`

* __Notice:__ Check that this form provides suggested corrections to errors in user input, unless it would jeopardize the security or purpose of the content.
 * WCAG2AA.Principle3.Guideline3_3.3_3_3.G177
 * #wrap > div:nth-child(1) > form
 * `<form> <div> <input type="text...</form>`

* __Notice:__ If this form would bind a user to a financial or legal commitment, modify/delete user-controllable data, or submit test responses, ensure that submissions are either reversible, checked for input errors, and/or confirmed by the user.
 * WCAG2AA.Principle3.Guideline3_3.3_3_4.G98,G99,G155,G164,G168.LegalForms
 * #wrap > div:nth-child(1) > form
 * `<form> <div> <input type="text...</form>`

* __Error:__ This text input element does not have a name available to an accessibility API. Valid names are: label element, title attribute, aria-label attribute, aria-labelledby attribute.
 * WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.InputText.Name
 * #wrap > div:nth-child(1) > form > div > input:nth-child(1)
 * `<input type="text" placeholder="Email Address">`

* __Error:__ This form field should be labelled in some way. Use the label element (either with a "for" attribute or wrapped around the form field), or "title", "aria-label" or "aria-labelledby" attributes as appropriate.
 * WCAG2AA.Principle1.Guideline1_3.1_3_1.F68
 * #wrap > div:nth-child(1) > form > div > input:nth-child(1)
 * `<input type="text" placeholder="Email Address">`

* __Notice:__ Check that a change of context does not occur when this input field receives focus.
 * WCAG2AA.Principle3.Guideline3_2.3_2_1.G107
 * #wrap > div:nth-child(1) > form > div > input:nth-child(1)
 * `<input type="text" placeholder="Email Address">`

* __Error:__ This button input element does not have a name available to an accessibility API. Valid names are: value attribute, aria-label attribute, aria-labelledby attribute.
 * WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.InputButton.Name
 * #wrap > div:nth-child(1) > form > div > input:nth-child(2)
 * `<input type="submit" value="">`

* __Notice:__ Check that a change of context does not occur when this input field receives focus.
 * WCAG2AA.Principle3.Guideline3_2.3_2_1.G107
 * #wrap > div:nth-child(1) > form > div > input:nth-child(2)
 * `<input type="submit" value="">`

* __Error:__ Anchor element found with a valid href attribute, but no link content has been supplied.
 * WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.A.NoContent
 * #sitelogo
 * `<a id="sitelogo" href="http://www.codemash.org"></a>`

* __Notice:__ Check that the link text combined with programmatically determined link context identifies the purpose of the link.
 * WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81
 * #sitelogo
 * `<a id="sitelogo" href="http://www.codemash.org"></a>`

* __Notice:__ Check that the link text combined with programmatically determined link context identifies the purpose of the link.
 * WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81
 * #title > a
 * `<a href="http://www.codemash.org/">CodeMash</a>`

* __Notice:__ Check that the link text combined with programmatically determined link context identifies the purpose of the link.
 * WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81
 * #menu-item-15 > a
 * `<a href="http://www.codemash.org/"><span itemprop="name">Home</spa...</a>`

* __Notice:__ Check that the link text combined with programmatically determined link context identifies the purpose of the link.
 * WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81
 * #menu-item-474084 > a
 * `<a target="_blank" href="https://sponsors.codemash.org/home/sponsors"><span itemprop="name">2018 Spon...</a>`

* __Notice:__ Check that the link text combined with programmatically determined link context identifies the purpose of the link.
 * WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81
 * #menu-item-473954 > a
 * `<a href="http://www.codemash.org/buytickets/"><span itemprop="name">Tickets &...</a>`

* __Notice:__ Check that the link text combined with programmatically determined link context identifies the purpose of the link.
 * WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81
 * #menu-item-475014 > a
 * `<a href="http://www.codemash.org/kidzmash/"><span itemprop="name">KidzMash<...</a>`

* __Notice:__ Check that the link text combined with programmatically determined link context identifies the purpose of the link.
 * WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81
 * #menu-item-475104 > a
 * `<a href="http://www.codemash.org/event-agenda/"><span itemprop="name">Event Age...</a>`

* __Notice:__ Check that the link text combined with programmatically determined link context identifies the purpose of the link.
 * WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81
 * #menu-item-474834 > a
 * `<a href="http://www.codemash.org/schedule/"><span itemprop="name">Schedule<...</a>`

* __Notice:__ Check that the link text combined with programmatically determined link context identifies the purpose of the link.
 * WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81
 * #menu-item-474844 > a
 * `<a href="http://www.codemash.org/speakers/"><span itemprop="name">Speakers<...</a>`

* __Notice:__ Check that the link text combined with programmatically determined link context identifies the purpose of the link.
 * WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81
 * #menu-item-474154 > a
 * `<a href="http://www.codemash.org/callforinterns/"><span itemprop="name">Call for ...</a>`

* __Notice:__ Check that the link text combined with programmatically determined link context identifies the purpose of the link.
 * WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81
 * #menu-item-127 > a
 * `<a href="http://www.codemash.org/blog/"><span itemprop="name">Blog</spa...</a>`

* __Notice:__ Check that the link text combined with programmatically determined link context identifies the purpose of the link.
 * WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81
 * #menu-item-128 > a
 * `<a href="http://www.codemash.org/about/"><span itemprop="name">CodeMash ...</a>`

* __Notice:__ Check that the link text combined with programmatically determined link context identifies the purpose of the link.
 * WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81
 * #menu-item-1233 > a
 * `<a href="http://www.codemash.org/faq/"><span itemprop="name">FAQ</span...</a>`

* __Notice:__ Check that the link text combined with programmatically determined link context identifies the purpose of the link.
 * WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81
 * #menu-item-195651 > a
 * `<a href="http://www.codemash.org/sponsorship-info/"><span itemprop="name">Sponsorsh...</a>`

* __Notice:__ Check that the link text combined with programmatically determined link context identifies the purpose of the link.
 * WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81
 * #menu-item-269891 > a
 * `<a href="http://www.codemash.org/codemash-code-conduct/"><span itemprop="name">Code of C...</a>`

* __Notice:__ Check that the link text combined with programmatically determined link context identifies the purpose of the link.
 * WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81
 * #menu-item-3871 > a
 * `<a href="http://www.codemash.org/privacy-policy/"><span itemprop="name">Privacy P...</a>`

* __Notice:__ Check that the link text combined with programmatically determined link context identifies the purpose of the link.
 * WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81
 * #menu-item-91501 > a
 * `<a href="http://www.codemash.org/prior-year-sessions/"><span itemprop="name">Prior Yea...</a>`

* __Notice:__ Check that the link text combined with programmatically determined link context identifies the purpose of the link.
 * WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81
 * #menu-item-193 > a
 * `<a target="_blank" href="mailto:info@codemash.org"><span itemprop="name">email</sp...</a>`

* __Notice:__ Check that the link text combined with programmatically determined link context identifies the purpose of the link.
 * WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81
 * #menu-item-194 > a
 * `<a target="_blank" href="https://plus.google.com/communities/103299503839278807989"><span itemprop="name">Google +<...</a>`

* __Notice:__ Check that the link text combined with programmatically determined link context identifies the purpose of the link.
 * WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81
 * #menu-item-195 > a
 * `<a target="_blank" href="https://twitter.com/codemash"><span itemprop="name">Twitter</...</a>`

* __Notice:__ Check that the link text combined with programmatically determined link context identifies the purpose of the link.
 * WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81
 * #menu-item-196 > a
 * `<a target="_blank" href="http://www.facebook.com"><span itemprop="name">Facebook<...</a>`

* __Warning:__ This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 4.5:1.
 * WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage
 * #mobile-menu > span
 * `<span class="menu-label">Menu</span>`

* __Warning:__ This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 4.5:1.
 * WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage
 * #inner > div:nth-child(1) > div > p
 * `<p>CodeMash is a unique event that...</p>`

* __Notice:__ Ensure that the img element's alt text serves the same purpose and presents the same information as the image.
 * WCAG2AA.Principle1.Guideline1_1.1_1_1.G94.Image
 * #text-3 > div > div > p:nth-child(1) > img
 * `<img src="http://www.codemash.org/wp-content/themes/codemash/images/codemash-icon-featured-box.png" alt="CodeMash" width="87" height="106">`

* __Notice:__ If this image cannot be fully described in a short text alternative, ensure a long text alternative is also available, such as in the body text or through a link.
 * WCAG2AA.Principle1.Guideline1_1.1_1_1.G73,G74
 * #text-3 > div > div > p:nth-child(1) > img
 * `<img src="http://www.codemash.org/wp-content/themes/codemash/images/codemash-icon-featured-box.png" alt="CodeMash" width="87" height="106">`

* __Error:__ This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2:1. Recommendation: change background to #6d4000.
 * WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail
 * #text-3 > div > div > p:nth-child(2)
 * `<p class="big-text">Jan 09-12, 2018</p>`

* __Warning:__ Heading markup should be used if this content is intended as a heading.
 * WCAG2AA.Principle1.Guideline1_3.1_3_1.H42
 * #text-3 > div > div > p:nth-child(3)
 * `<p><b>Sandusky, Ohio</b></p>`

* __Warning:__ Semantic markup should be used to mark emphasised or special text so that it can be programmatically determined.
 * WCAG2AA.Principle1.Guideline1_3.1_3_1.H49.B
 * #text-3 > div > div > p:nth-child(3) > b
 * `<b>Sandusky, Ohio</b>`

* __Error:__ This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 3:1, but text in this element has a contrast ratio of 2:1. Recommendation: change background to #6d4000.
 * WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.Fail
 * #text-3 > div > div > p:nth-child(3) > b
 * `<b>Sandusky, Ohio</b>`

* __Warning:__ Check that this element has an inherited background colour or image to complement the corresponding inline foreground colour.
 * WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.FGColour
 * #custom_html-2 > div > div > p:nth-child(1)
 * `<p style="color: black;">Mailing List Signup</p>`

* __Error:__ This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 1.53:1. Recommendation: change background to #6d5700.
 * WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail
 * #custom_html-2 > div > div > p:nth-child(2)
 * `<p style="font-size:14px; margin:10px;">We run three mailing lists wher...</p>`

* __Error:__ This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.5:1. Recommendation: change text colour to #005975.
 * WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail
 * #custom_html-2 > div > div > p:nth-child(3) > a
 * `<a href="http://eepurl.com/bn9T81">Sponsor Information</a>`

* __Notice:__ Check that the link text combined with programmatically determined link context identifies the purpose of the link.
 * WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81
 * #custom_html-2 > div > div > p:nth-child(3) > a
 * `<a href="http://eepurl.com/bn9T81">Sponsor Information</a>`

* __Error:__ This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.5:1. Recommendation: change text colour to #005975.
 * WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail
 * #custom_html-2 > div > div > p:nth-child(4) > a
 * `<a href="http://eepurl.com/bn9Wd9">Speaker Information</a>`

* __Notice:__ Check that the link text combined with programmatically determined link context identifies the purpose of the link.
 * WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81
 * #custom_html-2 > div > div > p:nth-child(4) > a
 * `<a href="http://eepurl.com/bn9Wd9">Speaker Information</a>`

* __Error:__ This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.5:1. Recommendation: change text colour to #005975.
 * WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail
 * #custom_html-2 > div > div > p:nth-child(5) > a
 * `<a href="http://eepurl.com/-Ey0j">Attendee Information</a>`

* __Notice:__ Check that the link text combined with programmatically determined link context identifies the purpose of the link.
 * WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81
 * #custom_html-2 > div > div > p:nth-child(5) > a
 * `<a href="http://eepurl.com/-Ey0j">Attendee Information</a>`

* __Error:__ This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 1.75:1. Recommendation: change background to #006157.
 * WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail
 * #text-11 > div > div > p:nth-child(1)
 * `<p>We have plenty of tickets avail...</p>`

* __Notice:__ Check that the link text combined with programmatically determined link context identifies the purpose of the link.
 * WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81
 * #text-11 > div > div > p:nth-child(2) > a
 * `<a href="https://www.eventbrite.com/e/codemash-2018-tickets-36934080830?ref=ebtnebtckt" target="_blank"><img src="https://www.eventbrit...</a>`

* __Notice:__ Ensure that the img element's alt text serves the same purpose and presents the same information as the image.
 * WCAG2AA.Principle1.Guideline1_1.1_1_1.G94.Image
 * #text-11 > div > div > p:nth-child(2) > a > img
 * `<img src="https://www.eventbrite.com/custombutton?eid=36934080830" alt="Eventbrite - CodeMash 2018">`

* __Notice:__ If this image cannot be fully described in a short text alternative, ensure a long text alternative is also available, such as in the body text or through a link.
 * WCAG2AA.Principle1.Guideline1_1.1_1_1.G73,G74
 * #text-11 > div > div > p:nth-child(2) > a > img
 * `<img src="https://www.eventbrite.com/custombutton?eid=36934080830" alt="Eventbrite - CodeMash 2018">`

* __Warning:__ If this element contains a navigation section, it is recommended that it be marked up as a list.
 * WCAG2AA.Principle1.Guideline1_3.1_3_1.H48
 * #text-11 > div > div > p:nth-child(3)
 * `<p><a href="www.codemash.org/buyti...</p>`

* __Error:__ This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 3:1, but text in this element has a contrast ratio of 2.2:1. Recommendation: change text colour to #006d8f.
 * WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.Fail
 * #text-11 > div > div > p:nth-child(3) > a:nth-child(1)
 * `<a href="www.codemash.org/buytickets">Read about all of the ticket an...</a>`

* __Notice:__ Check that the link text combined with programmatically determined link context identifies the purpose of the link.
 * WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81
 * #text-11 > div > div > p:nth-child(3) > a:nth-child(1)
 * `<a href="www.codemash.org/buytickets">Read about all of the ticket an...</a>`

* __Error:__ Anchor element found with no link content and no name and/or ID attribute.
 * WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.A.EmptyNoId
 * #text-11 > div > div > p:nth-child(3) > a:nth-child(2)
 * `<a></a>`

* __Notice:__ Check that the link text combined with programmatically determined link context identifies the purpose of the link.
 * WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81
 * #text-11 > div > div > p:nth-child(3) > a:nth-child(2)
 * `<a></a>`

* __Error:__ Anchor element found with no link content and no name and/or ID attribute.
 * WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.A.EmptyNoId
 * #text-11 > div > div > a
 * `<a> </a>`

* __Notice:__ Check that the link text combined with programmatically determined link context identifies the purpose of the link.
 * WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81
 * #text-11 > div > div > a
 * `<a> </a>`

* __Error:__ Anchor element found with no link content and no name and/or ID attribute.
 * WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.A.EmptyNoId
 * #text-11 > div > a
 * `<a> </a>`

* __Notice:__ Check that the link text combined with programmatically determined link context identifies the purpose of the link.
 * WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81
 * #text-11 > div > a
 * `<a> </a>`

* __Warning:__ Anchor element found with link content, but no href, ID or name attribute has been supplied.
 * WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
 * #text-12 > div > a
 * `<a> <div class="textwidget"><p s...</a>`

* __Notice:__ Check that the link text combined with programmatically determined link context identifies the purpose of the link.
 * WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81
 * #text-12 > div > a
 * `<a> <div class="textwidget"><p s...</a>`

* __Warning:__ Check that this element has an inherited background colour or image to complement the corresponding inline foreground colour.
 * WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.FGColour
 * #text-12 > div > a > div > p:nth-child(1)
 * `<p style="color: black;">Important Dates</p>`

* __Error:__ This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 1.75:1. Recommendation: change background to #006157.
 * WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail
 * #text-12 > div > a > div > p:nth-child(2)
 * `<p style="text-align: left; font-size: 14px; margin: 0 10px;">Subscribe to our newsletters to...</p>`

* __Error:__ This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.2:1. Recommendation: change text colour to #00516a.
 * WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail
 * #text-12 > div > a > div > ul > li:nth-child(1)
 * `<li>Mid-July : Sponsorships Open</li>`

* __Error:__ This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.2:1. Recommendation: change text colour to #00516a.
 * WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail
 * #text-12 > div > a > div > ul > li:nth-child(2)
 * `<li>Aug 1 : Topic Interest Survey</li>`

* __Error:__ This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.2:1. Recommendation: change text colour to #00516a.
 * WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail
 * #text-12 > div > a > div > ul > li:nth-child(3)
 * `<li>Aug 15-31 : Call for Speakers</li>`

* __Error:__ This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.2:1. Recommendation: change text colour to #00516a.
 * WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail
 * #text-12 > div > a > div > ul > li:nth-child(4)
 * `<li>Sep 30 : Speaker Selection Anno...</li>`

* __Error:__ This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.2:1. Recommendation: change text colour to #00516a.
 * WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail
 * #text-12 > div > a > div > ul > li:nth-child(5)
 * `<li>Oct 4 : Tickets Go on Sale</li>`

* __Error:__ This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.2:1. Recommendation: change text colour to #00516a.
 * WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail
 * #text-12 > div > a > div > ul > li:nth-child(6)
 * `<li>Dec 4 : Full Schedule Published</li>`

* __Error:__ This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.2:1. Recommendation: change text colour to #00516a.
 * WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail
 * #text-12 > div > a > div > ul > li:nth-child(7)
 * `<li>Jan 9-12 : CodeMash!</li>`

* __Error:__ Anchor element found with no link content and no name and/or ID attribute.
 * WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.A.EmptyNoId
 * #simpleimage-6 > div > a
 * `<a> <p class="simple-image"> <...</a>`

* __Notice:__ Check that the link text combined with programmatically determined link context identifies the purpose of the link.
 * WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81
 * #simpleimage-6 > div > a
 * `<a> <p class="simple-image"> <...</a>`

* __Warning:__ Img element is marked so that it is ignored by Assistive Technology.
 * WCAG2AA.Principle1.Guideline1_1.1_1_1.H67.2
 * #simpleimage-6 > div > a > p > img
 * `<img width="313" height="313" src="http://www.codemash.org/wp-content/uploads/2015/02/p621857453-3-313x313.jpg" class="attachment-Home-Featured-Boxes size-Home-Featured-Boxes" alt="" srcset="http://www.codemash.org/wp-content/uploads/2015/02/p6218574...`

* __Notice:__ If this image cannot be fully described in a short text alternative, ensure a long text alternative is also available, such as in the body text or through a link.
 * WCAG2AA.Principle1.Guideline1_1.1_1_1.G73,G74
 * #simpleimage-6 > div > a > p > img
 * `<img width="313" height="313" src="http://www.codemash.org/wp-content/uploads/2015/02/p621857453-3-313x313.jpg" class="attachment-Home-Featured-Boxes size-Home-Featured-Boxes" alt="" srcset="http://www.codemash.org/wp-content/uploads/2015/02/p6218574...`

* __Error:__ Anchor element found with no link content and no name and/or ID attribute.
 * WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.A.EmptyNoId
 * #simpleimage-7 > div > a
 * `<a> </a>`

* __Notice:__ Check that the link text combined with programmatically determined link context identifies the purpose of the link.
 * WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81
 * #simpleimage-7 > div > a
 * `<a> </a>`

* __Warning:__ If this element contains a navigation section, it is recommended that it be marked up as a list.
 * WCAG2AA.Principle1.Guideline1_3.1_3_1.H48
 * #simpleimage-7 > div > p
 * `<p class="simple-image"><a> </a><a href="http://photo...</p>`

* __Error:__ Anchor element found with no link content and no name and/or ID attribute.
 * WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.A.EmptyNoId
 * #simpleimage-7 > div > p > a:nth-child(1)
 * `<a> </a>`

* __Notice:__ Check that the link text combined with programmatically determined link context identifies the purpose of the link.
 * WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81
 * #simpleimage-7 > div > p > a:nth-child(1)
 * `<a> </a>`

* __Error:__ Img element is the only content of the link, but is missing alt text. The alt text should describe the purpose of the link.
 * WCAG2AA.Principle1.Guideline1_1.1_1_1.H30.2
 * #simpleimage-7 > div > p > a:nth-child(2)
 * `<a href="http://photos.zaggstudios.com/codemash-2016"><img width="313" height="313" s...</a>`

* __Notice:__ Check that the link text combined with programmatically determined link context identifies the purpose of the link.
 * WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81
 * #simpleimage-7 > div > p > a:nth-child(2)
 * `<a href="http://photos.zaggstudios.com/codemash-2016"><img width="313" height="313" s...</a>`

* __Notice:__ If this image cannot be fully described in a short text alternative, ensure a long text alternative is also available, such as in the body text or through a link.
 * WCAG2AA.Principle1.Guideline1_1.1_1_1.G73,G74
 * #simpleimage-7 > div > p > a:nth-child(2) > img
 * `<img width="313" height="313" src="http://www.codemash.org/wp-content/uploads/2016/03/ZaggHomePageLogo2-313x313.png" class="attachment-Home-Featured-Boxes size-Home-Featured-Boxes" alt="" srcset="http://www.codemash.org/wp-content/uploads/2016/03/Zag...`

* __Error:__ This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.79:1. Recommendation: change text colour to #00607f.
 * WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail
 * #content > div:nth-child(3) > div:nth-child(1) > a
 * `<a href="/blog">View Blog</a>`

* __Notice:__ Check that the link text combined with programmatically determined link context identifies the purpose of the link.
 * WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81
 * #content > div:nth-child(3) > div:nth-child(1) > a
 * `<a href="/blog">View Blog</a>`

* __Warning:__ This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 4.5:1.
 * WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage
 * #featured-content-2 > div > div > p:nth-child(1) > span
 * `<span class="date published time" title="2017-10-01T12:33:15+00:00">October 1, 2017</span>`

* __Warning:__ The heading structure is not logically nested. This h2 element appears to be the primary document heading, so should be an h1 element.
 * WCAG2AA.Principle1.Guideline1_3.1_3_1_A.G141
 * #featured-content-2 > div > div > h2
 * `<h2><a href="http://www.codemash.or...</h2>`

* __Warning:__ This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 3:1.
 * WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.BgImage
 * #featured-content-2 > div > div > h2 > a
 * `<a href="http://www.codemash.org/codemash-2018-cfp-wrap/" title="CodeMash 2018 CFP Wrap-Up">CodeMash 2018 CFP Wrap-Up</a>`

* __Notice:__ Check that the link text combined with programmatically determined link context, or its title attribute, identifies the purpose of the link.
 * WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81,H33
 * #featured-content-2 > div > div > h2 > a
 * `<a href="http://www.codemash.org/codemash-2018-cfp-wrap/" title="CodeMash 2018 CFP Wrap-Up">CodeMash 2018 CFP Wrap-Up</a>`

* __Warning:__ This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 4.5:1.
 * WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage
 * #featured-content-2 > div > div > p:nth-child(3)
 * `<p>So, after a crazy month-and-a-h...</p>`

* __Warning:__ This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 4.5:1.
 * WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage
 * #featured-content-2 > div > div > p:nth-child(3) > a
 * `<a class="more-link" href="http://www.codemash.org/codemash-2018-cfp-wrap/">Read More</a>`

* __Notice:__ Check that the link text combined with programmatically determined link context identifies the purpose of the link.
 * WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81
 * #featured-content-2 > div > div > p:nth-child(3) > a
 * `<a class="more-link" href="http://www.codemash.org/codemash-2018-cfp-wrap/">Read More</a>`

* __Error:__ This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 3:1, but text in this element has a contrast ratio of 2.76:1. Recommendation: change background to #057da2.
 * WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.Fail
 * #content-sidebar-wrap > div:nth-child(2) > h3
 * `<h3 class="yellow-headline">Our 2018 Unobtainium Sponsors</h3>`

* __Warning:__ Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.
 * WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour
 * #content-sidebar-wrap > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div > div
 * `<div class="sponsor-photo" style="background:url(http://www.codemash.org/wp-content/uploads/2017/09/geenly.160px-150x100.png) no-repeat center center #fff;"> </div>`

* __Warning:__ Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.
 * WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour
 * #content-sidebar-wrap > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > div
 * `<div class="sponsor-photo" style="background:url(http://www.codemash.org/wp-content/uploads/2017/09/quickenloans.160px-150x100.png) no-repeat center center #fff;"> </div>`

* __Error:__ This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.79:1. Recommendation: change text colour to #00607f.
 * WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail
 * #content-sidebar-wrap > div:nth-child(2) > a
 * `<a href="https://sponsors.codemash.org/home/sponsors" target="_blank">View All Sponsors</a>`

* __Notice:__ Check that the link text combined with programmatically determined link context identifies the purpose of the link.
 * WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81
 * #content-sidebar-wrap > div:nth-child(2) > a
 * `<a href="https://sponsors.codemash.org/home/sponsors" target="_blank">View All Sponsors</a>`

* __Error:__ This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.54:1. Recommendation: change background to #0c0e0f.
 * WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail
 * #footer > div > div:nth-child(1) > p:nth-child(1)
 * `<p>© 2017 CodeMash Conference, an ...</p>`

* __Error:__ This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.54:1. Recommendation: change background to #0c0e0f.
 * WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail
 * #footer > div > div:nth-child(1) > p:nth-child(2)
 * `<p>Site designed by <a href="http:...</p>`

* __Notice:__ Check that the link text combined with programmatically determined link context identifies the purpose of the link.
 * WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81
 * #footer > div > div:nth-child(1) > p:nth-child(2) > a
 * `<a href="http://driftingcreatives.com" target="_blank">Drift</a>`

* __Error:__ This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.54:1. Recommendation: change background to #0c0e0f.
 * WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail
 * #footer > div > div:nth-child(2) > p > a
 * `<a href="#" class="top">It's boring down here. Take me ...</a>`

* __Notice:__ Check that the link text combined with programmatically determined link context identifies the purpose of the link.
 * WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81
 * #footer > div > div:nth-child(2) > p > a
 * `<a href="#" class="top">It's boring down here. Take me ...</a>`

* __Notice:__ Ensure that the img element's alt text serves the same purpose and presents the same information as the image.
 * WCAG2AA.Principle1.Guideline1_1.1_1_1.G94.Image
 * #footer > div > div:nth-child(2) > p > a > img
 * `<img src="http://www.codemash.org/wp-content/themes/codemash/images/up-arrow-button.png" width="36" height="36" alt="Go to Top of Page">`

* __Notice:__ If this image cannot be fully described in a short text alternative, ensure a long text alternative is also available, such as in the body text or through a link.
 * WCAG2AA.Principle1.Guideline1_1.1_1_1.G73,G74
 * #footer > div > div:nth-child(2) > p > a > img
 * `<img src="http://www.codemash.org/wp-content/themes/codemash/images/up-arrow-button.png" width="36" height="36" alt="Go to Top of Page">`


## Summary:
* 33 Errors
* 17 Warnings
* 55 Notices

