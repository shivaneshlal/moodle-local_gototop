<?php
// This file is part of Moodle - https://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <https://www.gnu.org/licenses/>.

/**
 * Local plugin to add a go to top button.
 *
 * @package     local_gototop
 * @copyright   2024 Shivanesh Lal<shivanesh.lal@outlook.com>
 * @license     https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

namespace local_gototop;

use core\hook\output\before_footer_html_generation;

/**
 * Hook callbacks for the local_gototop plugin.
 */
class hook_callbacks {
    /**
     * Add JavaScript before the footer is rendered.
     *
     * @param before_footer_html_generation $hook
     */
    public static function local_gototop_before_footer(before_footer_html_generation $hook): void {
        global $PAGE;

        // JavaScript for the GoToTop feature.
        $PAGE->requires->js_call_amd('local_gototop/gototop', 'init');
    }
}
