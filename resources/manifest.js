// This is only used a reference for if I ever want to update the chrome theme, 
// as Google's docs around manifest theme documentation is dreadful.

const manifest = 
{
    "manifest_version": 2, // Chrome manifest version
    "name": "Minimal Grey", // Project name
    "version": "x.x.x", // Project version
    "description": "A minimalist, grey Chrome theme", // Project description
    "icons": {
        "16": "icons/16.png",
        "32": "icons/32.png",
        "48": "icons/48.png",
        "128": "icons/128.png"
    },
    "theme": {
        "colors": {
            "frame": [0,0,0],
            "frame_inactive": [0,0,0],
            "frame_incognito": [0,0,0],
            "frame_incognito_inactive": [0,0,0],
            "background_tab": [0,0,0],
            "background_tab_inactive": [0,0,0],
            "background_tab_incognito": [0,0,0],
            "background_tab_incognito_inactive": [0,0,0],
            "toolbar": [0,0,0],
            "tab_text": [0,0,0],
            "tab_background_text": [0,0,0],
            "tab_background_text_inactive": [0,0,0],
            "tab_background_text_incognito": [0,0,0],
            "tab_background_text_incognito_inactive": [0,0,0],
            "bookmark_text": [0,0,0],
            "ntp_background": [0,0,0],
            "ntp_text": [0,0,0],
            "ntp_link": [0,0,0],
            "ntp_header": [0,0,0],
            "button_background": [0,0,0]
        },
        "images": {
            "theme_frame": "images/theme_frame.png",
            "theme_frame_inactive": "",
            "theme_frame_incognito": "",
            "theme_frame_incognito_inactive": "",
            "theme_toolbar": "images/theme_toolbar.png",
            "theme_tab_background": "images/theme_tab_background.png",
            "theme_tab_background_inactive": "",
            "theme_tab_background_incognito": "",
            "theme_tab_background_incognito_inactive": "",
            "theme_tab_background_v": "",
            "theme_ntp_background": "",
            "theme_frame_overlay": "",
            "theme_frame_overlay_inactive": "",
            "theme_button_background": "",
            "theme_ntp_attribution": "",
            "theme_window_control_background": ""
        },
        "properties": {
            "ntp_background_alignment": "",
            "ntp_background_repeat": "",
            "ntp_logo_alternate": ""
        },
        "tints": {
            "buttons": [0.5,0.5,0.5],
            "frame": [0.5,0.5,0.5],
            "frame_inactive": [0.5,0.5,0.5],
            "frame_incognito": [0.5,0.5,0.5],
            "frame_incognito_inactive": [0.5,0.5,0.5],
            "background_tab": [0.5,0.5,0.5]
        }
    }
}