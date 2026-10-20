/* 自定义列表 — MIT. Selector adapted from DeepSeek Harness ui-model-selection 0.2.0-rc.2. */
window.__ModuleLoader__.load({id:'dsh-custom-lists',factory:require=>{
const module={exports:{}};
const react=require('react'), react_dom=require('react-dom'), react_jsx_runtime=require('react/jsx-runtime');
const _deepseek_ai_dsh_client_ui_primitives=require('@deepseek-ai/dsh-client-ui-primitives');
const integration=window.__DSH_CUSTOM_LISTS__ ?? {profile:null,ofm:false};
		function r(e) {
			var t, f, n = "";
			if ("string" == typeof e || "number" == typeof e) n += e;
			else if ("object" == typeof e) if (Array.isArray(e)) {
				var o = e.length;
				for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
			} else for (f in e) e[f] && (n && (n += " "), n += f);
			return n;
		}
		function clsx() {
			for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
			return n;
		}
		//#endregion
// Selector styles (upstream build path removed).
		const css = ".customLists_root{min-width:0;position:relative}.customLists_trigger{border-radius:var(--dsw-radius-sm);min-width:0;max-width:min(360px,45cqw);height:28px;color:var(--dsw-alias-label-secondary);cursor:pointer;background:0 0;border:none;outline:none;align-items:center;gap:4px;padding:0 4px 0 8px;font-size:13px;font-weight:400;line-height:20px;display:flex}.customLists_trigger:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover)}.customLists_trigger:focus-visible:not([data-selection-focus]){box-shadow:0 0 0 2px var(--dsw-focus-ring-color,var(--dsw-alias-state-business-primary))}.customLists_trigger:disabled{color:var(--dsw-alias-label-dimmed);cursor:default}.customLists_triggerLabel{text-overflow:ellipsis;white-space:nowrap;min-width:0;overflow:hidden}.customLists_triggerEffort{text-overflow:ellipsis;white-space:nowrap;min-width:0;color:var(--dsw-alias-label-caption);flex-shrink:1000;overflow:hidden}.customLists_triggerIcon{display:var(--dsh-composer-model-icon-display,none);flex:none}.customLists_triggerLabel,.customLists_triggerEffort{display:var(--dsh-composer-model-text-display,block)}.customLists_chevron{color:var(--dsw-alias-label-caption);flex:none;transition:transform .12s}.customLists_chevronOpen{transform:rotate(180deg)}.customLists_menu{z-index:1100;--dsw-elevation-stroke-color:var(--dsw-alias-border-l1);width:max-content;min-width:min(240px,100vw - 32px);max-width:min(420px,100vw - 32px);max-height:min(360px,100vh - 96px);box-shadow:var(--dsw-elevation-prominent);color:var(--dsw-alias-label-primary);--dsh-scrollbar-thumb:var(--dsw-alias-scrollbar-bg-l2);--dsh-scrollbar-thumb-hover:var(--dsw-alias-scrollbar-hover-l2);border:0;flex-direction:column;padding:4px;display:flex;position:fixed;overflow:hidden}.customLists_status,.customLists_empty{color:var(--dsw-alias-label-tertiary);padding:8px;font-size:12px;line-height:18px}.customLists_error,.customLists_warning{border-radius:var(--dsw-radius-md);background:var(--dsw-alias-interactive-bg-hover-danger);color:var(--dsw-alias-state-error-primary);justify-content:space-between;align-items:flex-start;gap:6px;margin-bottom:3px;padding:6px 7px;font-size:11px;line-height:16px;display:flex}.customLists_warning{background:var(--dsw-alias-bg-module-platform);color:var(--dsw-alias-state-warn-label)}.customLists_retry{color:inherit;font:inherit;cursor:pointer;background:0 0;border:none;flex:none;padding:0;font-weight:600}.customLists_searchRow{flex-shrink:0;margin:2px 0 3px;position:relative}.customLists_searchRow .customLists_search{border-radius:var(--dsw-radius-md);background:0 0;border:0 solid #0000;height:auto;padding:5px 7px;display:flex}.customLists_searchRow .customLists_searchWithQuery{padding-right:34px}.customLists_searchClear{corner-shape:round;width:24px;height:24px;color:var(--dsw-alias-label-secondary);cursor:pointer;background:0 0;border:none;border-radius:50%;justify-content:center;align-items:center;padding:0;display:inline-flex;position:absolute;top:50%;right:4px;transform:translateY(-50%)}.customLists_searchClear:hover,.customLists_searchClear:focus-visible{background:var(--dsw-alias-interactive-bg-hover);outline:none}.customLists_searchRow .customLists_search:focus-within{border-color:#0000}.customLists_searchRow .customLists_search input{padding:0;font-size:12px;line-height:normal}.customLists_searchRow .customLists_search input::placeholder{color:var(--dsw-alias-label-caption)}.customLists_groups{min-height:0;overflow-y:auto}.customLists_option{box-sizing:border-box;border-radius:var(--dsw-radius-md);width:auto;min-width:100%;min-height:34px;color:inherit;text-align:left;cursor:pointer;background:0 0;border:none;outline:none;align-items:center;gap:6px;padding:5px 7px;display:flex}.customLists_option:not(.customLists_modelOption):hover:not(:disabled),.customLists_option:focus-visible,.customLists_optionActive:not(:disabled){background:var(--dsw-alias-interactive-bg-hover)}.customLists_selected{background:0 0}.customLists_option:disabled{color:var(--dsw-alias-label-dimmed);cursor:default}.customLists_optionCopy{flex-direction:column;flex:1;min-width:0;display:flex}.customLists_modelName{color:inherit;text-overflow:ellipsis;white-space:nowrap;font-size:13px;font-weight:400;line-height:18px;overflow:hidden}.customLists_check{color:var(--dsw-alias-label-primary);flex:0 0 14px;place-items:center;display:grid}.customLists_check svg{width:14px;height:14px}.customLists_cell{box-sizing:border-box;border-radius:var(--dsw-radius-md);width:auto;min-width:100%;height:34px;color:var(--dsw-alias-label-primary);cursor:pointer;text-align:left;background:0 0;border:none;outline:none;align-items:center;gap:6px;padding:0 8px;font-size:13px;line-height:20px;display:flex}.customLists_cell:hover,.customLists_cell:focus-visible{background:var(--dsw-alias-interactive-bg-hover)}.customLists_cellLabel{white-space:nowrap;flex:none}.customLists_cellValue{text-overflow:ellipsis;white-space:nowrap;text-align:right;min-width:0;color:var(--dsw-alias-label-tertiary);flex:auto;overflow:hidden}.customLists_cellChevron{width:12px;height:12px;color:var(--dsw-alias-menu-icon);flex:none}";
		const tagId = "dsh-custom-lists/ModelSelect.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "dsh-custom-lists";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		var ModelSelect_module_css_default = {
			"cell": "customLists_cell",
			"cellChevron": "customLists_cellChevron",
			"cellLabel": "customLists_cellLabel",
			"cellValue": "customLists_cellValue",
			"check": "customLists_check",
			"chevron": "customLists_chevron",
			"chevronOpen": "customLists_chevronOpen",
			"empty": "customLists_empty",
			"error": "customLists_error",
			"groups": "customLists_groups",
			"menu": "customLists_menu",
			"modelName": "customLists_modelName",
			"modelOption": "customLists_modelOption",
			"option": "customLists_option",
			"optionActive": "customLists_optionActive",
			"optionCopy": "customLists_optionCopy",
			"retry": "customLists_retry",
			"root": "customLists_root",
			"search": "customLists_search",
			"searchClear": "customLists_searchClear",
			"searchRow": "customLists_searchRow",
			"searchWithQuery": "customLists_searchWithQuery",
			"selected": "customLists_selected",
			"status": "customLists_status",
			"trigger": "customLists_trigger",
			"triggerEffort": "customLists_triggerEffort",
			"triggerIcon": "customLists_triggerIcon",
			"triggerLabel": "customLists_triggerLabel",
			"warning": "customLists_warning"
		};
		//#endregion
		//#region lib/types/client/provider-order.js
		/** Shared provider display order for the composer and command model pickers. */
		/**
		* Put the account and official providers first, preserving every other relative order.
		* @param groups - Provider groups in catalog order.
		* @returns a sorted copy; model order within each group is unchanged.
		*/
		function orderModelProviders(groups) {
			return groups.toSorted((left, right) => (left.id === "deepseek-account" ? 0 : left.id === "deepseek-official" ? 1 : 2) - (right.id === "deepseek-account" ? 0 : right.id === "deepseek-official" ? 1 : 2));
		}
		//#endregion
		//#region lib/types/client/ModelSelect.js
		/**
		* ModelSelect: the composer's named model seat (`conversation.input.model`).
		* Two-level selection per figma 496:26454's MenuDropdown: the root menu is
		* the Model / Effort row pair (label + current value + a right chevron),
		* each drilling into its own list — the provider-grouped model list over
		* the shared directory, and the effort levels. The trigger (313:14108's
		* ToggleButton) shows both: model name + effort in the caption tone.
		* Model catalogs above four entries show search, which retains focus while
		* ↑/↓ cycle the highlighted result; Enter and Tab accept it. Smaller model
		* catalogs, root panes, and effort panes move focus between rows. Escape and Shift+Tab leave a drilled pane first and otherwise close
		* back to the trigger. A drilled pane focuses the current effort or model
		* search field. Provider headings paint their background only while pinned
		* by scrolling. Clearing a query restores the full list and search focus.
		* Selecting restores trigger focus without a ring until the trigger loses focus
		* or the menu reopens. Model names match a case-insensitive ordered subsequence
		* within each provider group, ranked by
		* prefix, alignment score, then catalog order. Returning to the root pane
		* hands focus back to the cell that opened it. Data and submission ride the
		* same per-session ModelDirectory as the /model popup; exact-model reasoning
		* metadata and the selected effort come from the Host rather than a
		* client-owned vocabulary. A rejected selection announces through the shared
		* transient Toast anchored to the composer card; the in-menu strip with
		* Retry remains the catalog-load surface. While the directory's pending
		* selection is unsettled, the trigger shows a spinner in place of its
		* chevron, and each row whose value that selection carries shows one in place
		* of its check mark.
		*/
		/** Unplaced portal card: hidden but laid out at a fixed origin so offsetWidth/offsetHeight are real (Menu primitive's measure pass). */
		const MEASURE_STYLE = {
			visibility: "hidden",
			left: 0,
			top: 0
		};
		/**
		* Render the composer model seat.
		* @param props - owner share (locked) + injected face (shared directory
		* store/verbs) + the standard locale seat.
		* @returns the trigger and, while open, the two-level menu.
		*/
		function ModelSelect({ locked, available, directory, load, refresh, select, t }) {
			const state = (0, react.useSyncExternalStore)((fn) => directory.subscribe(fn), () => directory.getSnapshot());
			const [open, setOpen] = (0, react.useState)(false);
			const [pane, setPane] = (0, react.useState)("root");
			const [query, setQuery] = (0, react.useState)("");
			const [highlightedIndex, setHighlightedIndex] = (0, react.useState)(null);
			const [selectionFocus, setSelectionFocus] = (0, react.useState)(false);
			const lastActionRef = (0, react.useRef)("load");
			const [toast, setToast] = (0, react.useState)(null);
			const toastSeq = (0, react.useRef)(0);
			const rootRef = (0, react.useRef)(null);
			const triggerRef = (0, react.useRef)(null);
			const searchRef = (0, react.useRef)(null);
			const menuRef = (0, react.useRef)(null);
			const groupsRef = (0, react.useRef)(null);
			const [menuPos, setMenuPos] = (0, react.useState)(null);
			const itemRefs = (0, react.useRef)([]);
			const id = (0, react.useId)();
			const settings = useConfig();
            const [sourceId, setSourceId] = react.useState(null);
            const [providerId, setProviderId] = react.useState(null);
            const [sectionId,setSectionId]=react.useState(null);
            const allGroups = react.useMemo(() => orderModelProviders(state.groups), [state.groups]);
            const sources = react.useMemo(() => buildSources(allGroups, settings, integration.ofm), [allGroups, settings]);
            const activeSource = sources.find(source => source.id === sourceId);
            const sections=ofmSections(activeSource);
            const activeSection=sections?.find(s=>s.id===sectionId);
            const channelGroups=sections?(activeSection?.providers??[]):(activeSource?.providers??[]);
            const groups=react.useMemo(()=>activeSource?.category==='plugin'?activeSource.providers.filter(g=>(g.directoryId??g.id)===providerId):(activeSource?.providers??[]),[activeSource,providerId]);
            react.useEffect(() => { if ((pane==='model'||pane==='providers'||pane==='sections')&&!activeSource){setPane('root');triggerRef.current?.focus();}else if(pane==='model'&&activeSource?.category==='plugin'&&!activeSource.providers.some(g=>(g.directoryId??g.id)===providerId)){setPane('providers');triggerRef.current?.focus();}},[pane,activeSource,providerId]);
			const choices = (0, react.useMemo)(() => allGroups.flatMap((group) => group.models.map((model) => ({
				group,
				model,
				selection: {
					provider: group.id,
					model: model.id,
					...model.reasoning?.defaultEffort === void 0 ? {} : { reasoningEffort: model.reasoning.defaultEffort }
				}
			}))), [allGroups]);
			const showSearch = groups.reduce((n, group) => n + group.models.length, 0) > 4;
			const filteredGroups = (0, react.useMemo)(() => groups.map((group) => ({
				...group,
				models: (0, _deepseek_ai_dsh_client_ui_primitives.rankByName)(group.models, showSearch ? query.trim() : "")
			})).filter((group) => group.models.length > 0), [
				groups,
				query,
				showSearch
			]);
			const visibleModels = (0, react.useMemo)(() => filteredGroups.flatMap((group) => group.models.map((model) => ({
				provider: group.id,
				model: model.id
			}))), [filteredGroups]);
			const currentVisibleIndex = visibleModels.findIndex((model) => model.provider === state.current?.provider && model.model === state.current.model);
			const activeModelIndex = Math.min(highlightedIndex ?? Math.max(0, currentVisibleIndex), visibleModels.length - 1);
			const currentChoice = choices[state.current === null ? -1 : choices.findIndex((c) => c.selection.provider === state.current?.provider && c.selection.model === state.current.model)];
			const reasoning = currentChoice?.model.reasoning;
			const effectiveEffort = state.current?.reasoningEffort ?? reasoning?.defaultEffort;
			const effortLabel = reasoning === void 0 ? state.retainedEffort : effectiveEffort === void 0 ? t("effort.providerDefault") : reasoning.efforts.find((level) => level.id === effectiveEffort)?.name ?? effectiveEffort;
			const effortChoices = (0, react.useMemo)(() => reasoning === void 0 ? [] : [...reasoning.defaultEffort === void 0 ? [{
				key: "provider-default",
				effort: void 0,
				label: t("effort.providerDefault")
			}] : [], ...reasoning.efforts.map((effort) => ({
				key: `effort:${effort.id}`,
				effort: effort.id,
				label: effort.name
			}))], [reasoning, t]);
			const { pending } = state;
			const busy = pending !== null;
			const reload = () => {
				lastActionRef.current = "load";
				(refresh ?? load)();
			};
			(0, react.useEffect)(() => {
				if (!open) return;
				const closeOutside = (event) => {
					if (rootRef.current?.contains(event.target) === true) return;
					if (menuRef.current?.contains(event.target) === true) return;
					setOpen(false);
				};
				document.addEventListener("mousedown", closeOutside);
				return () => {
					document.removeEventListener("mousedown", closeOutside);
				};
			}, [open]);
			(0, react.useLayoutEffect)(() => {
				if (!showSearch) {
					setQuery("");
					setHighlightedIndex(null);
				}
			}, [showSearch]);
			const paneFocus = (0, react.useRef)(null);
			const previousShowSearch = (0, react.useRef)(showSearch);
			(0, react.useEffect)(() => {
				const changedSearchMode = previousShowSearch.current !== showSearch;
				previousShowSearch.current = showSearch;
				const intent = paneFocus.current ?? (changedSearchMode && pane === "model" ? "drill" : null);
				paneFocus.current = null;
				if (!open || intent === null) return;
				if (intent === "drill") {
					if (pane === "model" && showSearch) {
						searchRef.current?.focus();
						return;
					}
					(menuRef.current?.querySelector("[role=\"menuitemradio\"][aria-checked=\"true\"]:not([disabled])") ?? itemRefs.current.find((item) => item !== null && !item.disabled) ?? triggerRef.current)?.focus();
					return;
				}
				const cell = itemRefs.current[intent === "effort" ? sources.length + 1 : Math.max(0, sources.findIndex(source => source.id === sourceId))];
				(cell !== null && cell !== void 0 && !cell.disabled ? cell : triggerRef.current)?.focus();
			}, [
				open,
				pane,
				showSearch
			]);
			(0, react.useEffect)(() => {
				const viewport = groupsRef.current;
				if (viewport === null) return;
				return (0, _deepseek_ai_dsh_client_ui_primitives.observeStickyMenuGroups)(viewport);
			}, [
				available,
				open,
				pane,
				filteredGroups
			]);
			(0, react.useLayoutEffect)(() => {
				if (open && pane === "model" && activeModelIndex >= 0) itemRefs.current[activeModelIndex]?.scrollIntoView({ block: "nearest" });
			}, [
				open,
				pane,
				activeModelIndex,
				visibleModels
			]);
			(0, react.useLayoutEffect)(() => {
				if (!open) {
					setMenuPos(null);
					return;
				}
				const place = () => {
					/* v8 ignore next 2 -- the trigger ref is attached whenever the menu is open. */
					const rect = triggerRef.current?.getBoundingClientRect();
					if (rect === void 0) return;
					const MARGIN = 12;
					const lw = menuRef.current?.offsetWidth ?? 0;
					const lh = menuRef.current?.offsetHeight ?? 0;
					let x = rect.right - lw;
					let y = rect.top - 8 - lh;
					if (lw > 0) x = Math.min(Math.max(x, MARGIN), window.innerWidth - lw - MARGIN);
					if (lh > 0) y = Math.min(Math.max(y, MARGIN), window.innerHeight - lh - MARGIN);
					setMenuPos({
						left: x,
						top: y
					});
				};
				place();
				window.addEventListener("scroll", place, true);
				window.addEventListener("resize", place);
				return () => {
					window.removeEventListener("scroll", place, true);
					window.removeEventListener("resize", place);
				};
			}, [
				open,
				pane,
				state,
				query
			]);
			if (!available) return null;
			const show = () => {
				setSelectionFocus(false);
				triggerRef.current?.focus();
				setQuery("");
				setHighlightedIndex(null);
				paneFocus.current = "drill";
				setPane("root");
				setOpen(true);
				load();
			};
			const changeQuery = (next) => {
				setQuery(next);
				setHighlightedIndex(0);
			};
			const close = (restoreFocus = false) => {
				setOpen(false);
				setPane("root");
				if (restoreFocus) queueMicrotask(() => {
					triggerRef.current?.focus();
				});
			};
			const closeAfterSelection = () => {
				setSelectionFocus(true);
				close(true);
			};
			const drill = (next) => {
				setQuery("");
				setHighlightedIndex(null);
				paneFocus.current = "drill";
				setPane(next);
			};
			/** Leave a drilled pane for the root one, handing the keyboard back to its cell. */
			const back = (from) => {
                paneFocus.current = from;
                if(from==='model' && activeSource?.category==='plugin'){paneFocus.current='drill';setPane('providers');}else if(from==='providers'&&sections){paneFocus.current='drill';setPane('sections');}else setPane('root');
			};
			const moveFocus = (offset) => {
				const items = itemRefs.current.filter((item) => item !== null);
				if (items.length === 0) return;
				const active = items.findIndex((item) => item === document.activeElement);
				items[active === -1 ? offset > 0 ? 0 : items.length - 1 : (active + offset + items.length) % items.length]?.focus();
			};
			const onRootKeyDown = (event) => {
				if (event.nativeEvent.isComposing) return;
				if (event.key === "Escape" && open) {
					event.preventDefault();
					if (pane !== "root") back(pane);
					else close(true);
					return;
				}
				if (!open) return;
				if (pane === "model" && showSearch && (event.key === "ArrowDown" || event.key === "ArrowUp")) {
					event.preventDefault();
					if (!busy && visibleModels.length > 0) {
						setHighlightedIndex((activeModelIndex + (event.key === "ArrowDown" ? 1 : -1) + visibleModels.length) % visibleModels.length);
						searchRef.current?.focus();
					}
					return;
				}
				if (pane === "model" && showSearch && event.target instanceof HTMLInputElement && (event.key === "Enter" || event.key === "Tab" && !event.shiftKey)) {
					if (event.key === "Tab" && visibleModels.length === 0) return;
					event.preventDefault();
					const highlighted = visibleModels[activeModelIndex];
					if (!busy && highlighted !== void 0) choose(highlighted);
					return;
				}
				if (event.key === "Tab") {
					if (event.shiftKey) {
						event.preventDefault();
						if (pane !== "root") back(pane);
						else close(true);
						return;
					}
					const focused = document.activeElement;
					const rows = itemRefs.current.filter((item) => item !== null);
					if (focused instanceof HTMLButtonElement && rows.includes(focused)) {
						event.preventDefault();
						focused.click();
						return;
					}
					if (focused !== triggerRef.current) return;
					event.preventDefault();
					if (pane === "model" && showSearch) {
						setHighlightedIndex(null);
						searchRef.current?.focus();
						return;
					}
					(menuRef.current?.querySelector("[role=\"menuitemradio\"][aria-checked=\"true\"]:not([disabled])") ?? rows.find((item) => !item.disabled))?.focus();
					return;
				}
				if (event.key === "ArrowDown" || event.key === "ArrowUp") {
					event.preventDefault();
					moveFocus(event.key === "ArrowDown" ? 1 : -1);
				}
			};
			const onBlur = (event) => {
				if (event.relatedTarget instanceof Node && (rootRef.current?.contains(event.relatedTarget) === true || menuRef.current?.contains(event.relatedTarget) === true)) return;
				close();
			};
			const settleSelection = (result) => {
				if (result === void 0) return;
				if (result.ok) {
					if (rootRef.current !== null) closeAfterSelection();
					return;
				}
				const { error } = result;
				toastSeq.current += 1;
				setToast({
					seq: toastSeq.current,
					text: error.code === "session/writer-held" ? t("error.sessionInUse") : t("error.action", { message: `${error.code}: ${error.message}` })
				});
			};
			const submit = (selection) => {
				lastActionRef.current = "select";
				setSelectionFocus(true);
				triggerRef.current?.focus();
				select(selection).then(settleSelection);
			};
			const choose = (selection) => {
				if (state.current?.provider === selection.provider && state.current.model === selection.model) {
					closeAfterSelection();
					return;
				}
				submit(selection);
			};
			const chooseEffort = (effort) => {
				if (state.current === null) return;
				if (effectiveEffort === effort) {
					closeAfterSelection();
					return;
				}
				submit({
					provider: state.current.provider,
					model: state.current.model,
					...effort === void 0 ? {} : { reasoningEffort: effort }
				});
			};
			const waiting = state.current === null && state.status === "loading";
			const modelLabel = waiting ? t("trigger.loading") : currentChoice?.model.name ?? (state.current === null ? t("trigger.fallback") : `${state.current.provider}/${state.current.model}`);
			const triggerLabel = effortLabel === void 0 ? modelLabel : `${modelLabel} · ${effortLabel}`;
			const triggerAria = waiting ? t("trigger.loading") : state.current === null ? t("trigger.selectAria") : effortLabel === void 0 ? t("trigger.aria", { model: modelLabel }) : t("trigger.ariaEffort", {
				model: modelLabel,
				effort: effortLabel
			});
			itemRefs.current = [];
			let itemIndex = 0;
			let modelIndex = 0;
			const itemRef = () => {
				const at = itemIndex++;
				return (node) => {
					itemRefs.current[at] = node;
				};
			};
			return (0, react_jsx_runtime.jsxs)("div", {
				ref: rootRef,
				className: ModelSelect_module_css_default.root,
				onKeyDown: onRootKeyDown,
				onBlur,
				onMouseDown: (event) => {
					if (event.target instanceof Element && event.target.closest("button") !== null) event.preventDefault();
				},
				children: [
					(0, react_jsx_runtime.jsxs)("button", {
						ref: triggerRef,
						type: "button",
						className: ModelSelect_module_css_default.trigger,
						"aria-label": triggerAria,
						"aria-haspopup": "menu",
						"aria-expanded": open,
						"aria-controls": open ? `${id}-menu` : void 0,
						title: triggerLabel,
						"aria-busy": busy,
						"data-selection-focus": selectionFocus ? "" : void 0,
						onBlur: () => {
							setSelectionFocus(false);
						},
						disabled: locked,
						onClick: () => {
							if (open) close(true);
							else show();
						},
						children: [
							(0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconDataOutlineRegular, {
								className: ModelSelect_module_css_default.triggerIcon,
								size: 16
							}),
							(0, react_jsx_runtime.jsx)("span", {
								className: ModelSelect_module_css_default.triggerLabel,
								children: modelLabel
							}),
							effortLabel !== void 0 && (0, react_jsx_runtime.jsx)("span", {
								className: ModelSelect_module_css_default.triggerEffort,
								children: effortLabel
							}),
							busy ? (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.StateDot, { state: "ongoing" }) : (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconChevronDownOutlineRegular, { className: clsx(ModelSelect_module_css_default.chevron, open && ModelSelect_module_css_default.chevronOpen) })
						]
					}),
					open && (0, react_dom.createPortal)((0, react_jsx_runtime.jsxs)(_deepseek_ai_dsh_client_ui_primitives.MenuSurface, {
						ref: menuRef,
						id: `${id}-menu`,
						className: ModelSelect_module_css_default.menu,
						style: menuPos ?? MEASURE_STYLE,
						role: pane === "model" ? "group" : "menu",
						"aria-label": t("menu.aria"),
						"aria-busy": state.status === "loading" || busy,
						children: [
							pane === "root" && (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
                react.createElement('div', {className: ModelSelect_module_css_default.groups, key:'sources'},
                  sources.map(source => react.createElement('button', {
                    key:source.id, ref:itemRef(), type:'button', role:'menuitem',
                    className:ModelSelect_module_css_default.cell,
                    onClick:()=>{setSourceId(source.id);setProviderId(null);setSectionId(null);drill(ofmSections(source)?'sections':source.category==='plugin'?'providers':'model');}
                  }, react.createElement('span',{className:'customLists_badge', 'data-active':source.providers.some(g=>g.id===state.current?.provider)?'true':'false'},'【'+categoryName(source.category)+'】'),react.createElement('span',{className:ModelSelect_module_css_default.cellLabel},source.name),
                  react.createElement('span',{className:ModelSelect_module_css_default.cellValue},source.providers.reduce((n,g)=>n+g.models.length,0)+' 个模型'),
                  react.createElement(_deepseek_ai_dsh_client_ui_primitives.IconChevronRightOutlineRegular,{className:ModelSelect_module_css_default.cellChevron})))),
                sources.length === 0 && react.createElement('div',{role:'status',className:ModelSelect_module_css_default.status},state.status==='loading'?t('status.loading'):t('empty.models')),
                state.failures.length > 0 && react.createElement('div',{role:'status',className:ModelSelect_module_css_default.warning},state.failures.map(f=>f.name+': '+f.message).join('；')),
                state.error !== null && react.createElement('div',{role:'alert',className:ModelSelect_module_css_default.error},state.error),
                react.createElement('button',{ref:itemRef(),role:'menuitem',type:'button',className:ModelSelect_module_css_default.cell,onClick:reload},'刷新列表'),
                reasoning !== void 0 && (0, react_jsx_runtime.jsxs)("button", {
								ref: itemRef(),
								type: "button",
								role: "menuitem",
								className: ModelSelect_module_css_default.cell,
								onClick: () => {
									drill("effort");
								},
								children: [
									(0, react_jsx_runtime.jsx)("span", {
										className: ModelSelect_module_css_default.cellLabel,
										children: t("menu.effort")
									}),
									(0, react_jsx_runtime.jsx)("span", {
										className: ModelSelect_module_css_default.cellValue,
										children: effortLabel
									}),
									(0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconChevronRightOutlineRegular, { className: ModelSelect_module_css_default.cellChevron })
								]
							})] }),
							pane==='sections' && react.createElement(react.Fragment,null,
                react.createElement('button',{type:'button',className:ModelSelect_module_css_default.cell,onClick:()=>back('sections')},'‹ 返回来源 · '+(activeSource?.name??'')),
                react.createElement('div',{className:ModelSelect_module_css_default.groups},(sections??[]).map(section=>react.createElement('button',{
                  key:section.id,ref:itemRef(),type:'button',role:'menuitem',className:ModelSelect_module_css_default.cell,
                  onClick:()=>{setSectionId(section.id);drill('providers');}
                },react.createElement('span',{className:ModelSelect_module_css_default.cellLabel},section.name),
                  react.createElement('span',{className:ModelSelect_module_css_default.cellValue},section.providers.length?section.providers.length+' 个渠道':'暂无可用模型'),
                  react.createElement(_deepseek_ai_dsh_client_ui_primitives.IconChevronRightOutlineRegular,{className:ModelSelect_module_css_default.cellChevron}))))),
                pane === 'providers' && react.createElement(react.Fragment,null,
                react.createElement('button',{type:'button',className:ModelSelect_module_css_default.cell,ref:channelGroups.length===0?itemRef():undefined,onClick:()=>back('providers')},'‹ '+(sections?'返回分类':'返回来源')+' · '+(activeSection?.name??activeSource?.name??'')),
                channelGroups.length===0 && react.createElement('div',{role:'status',className:ModelSelect_module_css_default.status},'暂无可用模型'),react.createElement('div',{className:ModelSelect_module_css_default.groups},channelGroups.map(group=>react.createElement('button',{
                  key:group.directoryId??group.id,ref:itemRef(),type:'button',role:'menuitem',className:ModelSelect_module_css_default.cell,
                  onClick:()=>{setProviderId(group.directoryId??group.id);drill('model');}
                },react.createElement('span',{className:ModelSelect_module_css_default.cellLabel},group.name),
                  react.createElement('span',{className:ModelSelect_module_css_default.cellValue},group.models.length+' 个模型'),
                  react.createElement(_deepseek_ai_dsh_client_ui_primitives.IconChevronRightOutlineRegular,{className:ModelSelect_module_css_default.cellChevron}))))),
                pane === "model" && (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
                react.createElement('button',{type:'button',className:ModelSelect_module_css_default.cell,onClick:()=>back('model')},'‹ '+(activeSource?.category==='plugin'?'返回渠道':'返回来源')+' · '+(activeSource?.category==='plugin'?groups[0]?.name??'':activeSource?.name??'')),
								showSearch && (0, react_jsx_runtime.jsxs)("div", {
									className: ModelSelect_module_css_default.searchRow,
									children: [(0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Input, {
										ref: searchRef,
										className: clsx(ModelSelect_module_css_default.search, query !== "" && ModelSelect_module_css_default.searchWithQuery),
										type: "text",
										role: "searchbox",
										"aria-label": t("search.placeholder"),
										"aria-controls": `${id}-models`,
										"aria-activedescendant": activeModelIndex < 0 ? void 0 : `${id}-model-${activeModelIndex}`,
										placeholder: t("search.placeholder"),
										value: query,
										readOnly: busy,
										onChange: (event) => {
											changeQuery(event.target.value);
										}
									}), query !== "" && (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										className: ModelSelect_module_css_default.searchClear,
										"aria-label": t("search.clear"),
										disabled: busy,
										onClick: () => {
											changeQuery("");
											searchRef.current?.focus();
										},
										children: (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCloseFillRegular, {})
									})]
								}),
								state.status === "loading" && (0, react_jsx_runtime.jsx)("div", {
									className: ModelSelect_module_css_default.status,
									children: t("status.loading")
								}),
								state.error !== null && lastActionRef.current === "load" && (0, react_jsx_runtime.jsxs)("div", {
									className: ModelSelect_module_css_default.error,
									children: [(0, react_jsx_runtime.jsx)("span", { children: t("error.action", { message: state.error }) }), (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										className: ModelSelect_module_css_default.retry,
										onClick: reload,
										children: t("retry")
									})]
								}),
								state.failures.filter(failure => !activeSource || activeSource.providers.some(group => group.id === failure.id)).map((failure) => (0, react_jsx_runtime.jsxs)("div", {
									className: ModelSelect_module_css_default.warning,
									children: [(0, react_jsx_runtime.jsx)("span", { children: t("warning.groupLoad", {
										name: failure.id === "deepseek-account" ? t("provider.account") : failure.name,
										message: failure.message
									}) }), (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										className: ModelSelect_module_css_default.retry,
										onClick: reload,
										children: t("retry")
									})]
								}, failure.id)),
								(0, react_jsx_runtime.jsx)("div", {
									ref: groupsRef,
									id: `${id}-models`,
									className: clsx(ModelSelect_module_css_default.groups, "scrollable"),
									role: "menu",
									"aria-label": t("menu.model"),
									hidden: filteredGroups.length === 0,
									children: filteredGroups.map((group) => {
										return (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.MenuGroup, {
											label: group.id === "deepseek-account" ? t("provider.account") : group.name,
											children: group.models.map((model) => {
												const index = modelIndex++;
												const selected = state.current?.provider === group.id && state.current.model === model.id;
												return (0, react_jsx_runtime.jsxs)("button", {
													ref: itemRef(),
													type: "button",
													role: "menuitemradio",
													"aria-checked": selected,
													id: `${id}-model-${index}`,
													tabIndex: showSearch ? -1 : 0,
													onFocus: () => {
														setHighlightedIndex(index);
													},
													"data-highlighted": index === activeModelIndex ? "" : void 0,
													className: clsx(ModelSelect_module_css_default.option, ModelSelect_module_css_default.modelOption, selected && ModelSelect_module_css_default.selected, index === activeModelIndex && ModelSelect_module_css_default.optionActive),
													onMouseMove: busy || index === activeModelIndex ? void 0 : () => {
														if (showSearch) setHighlightedIndex(index);
														else itemRefs.current[index]?.focus();
													},
													title: model.name,
													disabled: busy,
													onClick: () => {
														choose({
 provider: group.id,
 model: model.id,
 reasoningEffort: model.reasoning?.defaultEffort
														});
													},
													children: [(0, react_jsx_runtime.jsx)("span", {
														className: ModelSelect_module_css_default.optionCopy,
														children: (0, react_jsx_runtime.jsx)("span", {
															className: ModelSelect_module_css_default.modelName,
															children: model.name
														})
													}), (0, react_jsx_runtime.jsx)("span", {
														className: ModelSelect_module_css_default.check,
														children: pending?.provider === group.id && pending.model === model.id ? (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.StateDot, { state: "ongoing" }) : selected ? (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCheckOutlineRegular, {}) : null
													})]
												}, model.id);
											})
										}, group.id);
									})
								}),
								state.status === "ready" && filteredGroups.length === 0 && (0, react_jsx_runtime.jsx)("div", {
									className: ModelSelect_module_css_default.empty,
									role: "status",
									children: t(choices.length === 0 ? "empty.models" : "search.empty")
								})
							] }),
							pane === "effort" && (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [react.createElement('button',{type:'button',className:ModelSelect_module_css_default.cell,onClick:()=>back('effort')},'‹ 返回来源'),state.error !== null && lastActionRef.current === "load" && (0, react_jsx_runtime.jsxs)("div", {
								className: ModelSelect_module_css_default.error,
								children: [(0, react_jsx_runtime.jsx)("span", { children: t("error.action", { message: state.error }) }), (0, react_jsx_runtime.jsx)("button", {
									type: "button",
									className: ModelSelect_module_css_default.retry,
									onClick: reload,
									children: t("action.reload")
								})]
							}), effortChoices.length === 0 ? (0, react_jsx_runtime.jsx)("div", {
								className: ModelSelect_module_css_default.empty,
								children: t("empty.efforts")
							}) : effortChoices.map((level) => (0, react_jsx_runtime.jsxs)("button", {
								ref: itemRef(),
								type: "button",
								role: "menuitemradio",
								"aria-checked": effectiveEffort === level.effort,
								className: clsx(ModelSelect_module_css_default.option, effectiveEffort === level.effort && ModelSelect_module_css_default.selected),
								disabled: busy,
								onClick: () => {
									chooseEffort(level.effort);
								},
								children: [(0, react_jsx_runtime.jsx)("span", {
									className: ModelSelect_module_css_default.optionCopy,
									children: (0, react_jsx_runtime.jsx)("span", {
										className: ModelSelect_module_css_default.modelName,
										children: level.label
									})
								}), (0, react_jsx_runtime.jsx)("span", {
									className: ModelSelect_module_css_default.check,
									children: pending !== null && pending.provider === state.current?.provider && pending.model === state.current.model && pending.reasoningEffort === level.effort ? (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.StateDot, { state: "ongoing" }) : effectiveEffort === level.effort ? (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCheckOutlineRegular, {}) : null
								})]
							}, level.key))] })
						]
					}), document.body),
					toast !== null && (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Toast, {
						text: toast.text,
						icon: (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconWarningOutlineRegular, {}),
						anchor: rootRef.current?.closest("[data-composer-card]") ?? null,
						onDone: () => {
							setToast(null);
						}
					}, toast.seq)
				]
			});
		}
		//#endregion
		const zh = {
			"provider.account": "DeepSeek 账号",
			"command.label": "模型",
			"command.description": "选择本会话使用的模型",
			"option.loadError": "目录加载失败：{message}",
			"trigger.fallback": "请选择模型",
			"trigger.loading": "正在加载模型…",
			"trigger.selectAria": "请选择模型",
			"trigger.aria": "选择模型，当前 {model}",
			"trigger.ariaEffort": "选择模型，当前 {model}，推理等级 {effort}",
			"menu.aria": "模型与推理等级",
			"menu.model": "模型",
			"menu.effort": "推理等级",
			"effort.providerDefault": "Default",
			"status.loading": "正在刷新模型列表…",
			"error.action": "模型操作失败：{message}",
			"error.sessionInUse": "当前会话已被占用，可能是其他正在运行的 DSH 导致的（如其他 dsh web、桌面端），请退出其他正在运行的 DSH 后重试。",
			"action.reload": "重新加载",
			"warning.groupLoad": "{name} 加载失败：{message}",
			"search.placeholder": "搜索模型…",
			"search.clear": "清除搜索",
			"search.empty": "没有匹配的模型。",
			"empty.models": "没有可用的模型。",
			"empty.efforts": "当前模型未提供推理等级。"
		};
		/** English dictionary, checked complete against the zh key set. */
		const en = {
			"provider.account": "DeepSeek Account",
			"command.label": "Model",
			"command.description": "Select the model for this conversation",
			"option.loadError": "Catalog failed to load: {message}",
			"trigger.fallback": "Select model",
			"trigger.loading": "Loading models…",
			"trigger.selectAria": "Select model",
			"trigger.aria": "Select model, current {model}",
			"trigger.ariaEffort": "Select model, current {model}, reasoning effort {effort}",
			"menu.aria": "Model and reasoning effort",
			"menu.model": "Model",
			"menu.effort": "Effort",
			"effort.providerDefault": "Default",
			"status.loading": "Refreshing model list…",
			"error.action": "Model operation failed: {message}",
			"error.sessionInUse": "This session is already in use, possibly by another running DSH instance (such as dsh web or the desktop app). Quit other running DSH instances and try again.",
			"action.reload": "Reload",
			"warning.groupLoad": "{name} failed to load: {message}",
			"search.placeholder": "Search models…",
			"search.clear": "Clear search",
			"search.empty": "No matching models.",
			"empty.models": "No models available.",
			"empty.efforts": "This model provides no reasoning effort levels."
		};
		//#endregion
function categoryName(category){return {official:'官方',plugin:'插件',relay:'中转'}[category]??'中转';}
// Pure grouping and validated, presentation-only preferences.
const OFM_IDS = new Set(['our-free-model','our-free-model-region','codearts','buddy','workbuddy','lobsterai','qoder','qodercn','trae','cline','loomy','raccoon','minimax','zcode','gemini']);
const DEFAULT_CONFIG = {version:1, enabled:true, groups:[{id:'deepseek-account',name:'DeepSeek 账号',category:'official'},{id:'ofm',name:'Our Free Model',category:'plugin'}], assignments:{}};
function normalizeConfig(input) {
  if (!input || input.version !== 1 || !Array.isArray(input.groups) || !input.assignments || typeof input.assignments !== 'object' || Array.isArray(input.assignments)) throw new Error('无效配置：需要 version、groups 和 assignments。');
  if (input.groups.length > 100) throw new Error('分组过多。');
  const seen = new Set();
  const groups = input.groups.map(group => {
    if (!group || typeof group.id !== 'string' || !/^[a-zA-Z0-9_.-]{1,100}$/.test(group.id) || typeof group.name !== 'string' || !group.name.trim() || group.name.length > 100 || seen.has(group.id)) throw new Error('分组 ID 或名称无效，或 ID 重复。');
    const category=group.category ?? (group.id==='ofm'?'plugin':group.id==='deepseek-account'?'official':'relay');
    if(!['official','plugin','relay'].includes(category))throw new Error('来源类别无效。');
    seen.add(group.id); return {id:group.id,name:group.name.trim(),category};
  });
  const assignments = Object.create(null);
  for (const [provider, target] of Object.entries(input.assignments)) {
    if (!provider || provider.length > 250 || ['__proto__','constructor','prototype'].includes(provider) || (target !== null && !seen.has(target))) throw new Error('提供商映射无效：'+provider);
    assignments[provider]=target;
  }
  return {version:1,enabled:input.enabled !== false,groups,assignments};
}
function buildSources(groups, config, ofmInstalled) {
  const result = new Map();
  // Explicit OFM producer tags, only on its two shared routes. Never rewrite ids.
  const directories=groups.flatMap(group=>{
    if(!['our-free-model','our-free-model-region'].includes(group.id))return [group];
    const buckets=new Map();
    for(const model of group.models){
      const lane=/^EAC\s/.test(model.name)?'eac':/^Kilo\s/.test(model.name)?'kilo':'main';
      if(!buckets.has(lane))buckets.set(lane,[]);buckets.get(lane).push(model);
    }
    return [...buckets].map(([lane,models])=>({...group,directoryId:group.id+':'+lane,name:lane==='eac'?'EAC':lane==='kilo'?'Kilo':group.name,models}));
  });
  for (const group of directories) {
    if (!group.models.length) continue;
    const explicit = Object.hasOwn(config.assignments,group.id);
    let id = explicit ? config.assignments[group.id] : group.id === 'deepseek-account' ? 'deepseek-account' : ofmInstalled && OFM_IDS.has(group.id) ? 'ofm' : null;
    const defined = config.groups.find(g=>g.id===id);
    const key = defined ? 'group:'+defined.id : 'provider:'+group.id;
    if (!result.has(key)) result.set(key,{id:key,name:defined?.name ?? (group.id==='deepseek-account'?'DeepSeek 账号':group.name),category:defined?.category ?? (group.id==='deepseek-account'||group.id==='deepseek-official'?'official':ofmInstalled&&OFM_IDS.has(group.id)?'plugin':'relay'),providers:[]});
    result.get(key).providers.push(group);
  }
  const order = config.groups.map(g=>'group:'+g.id);
  return [...result.values()].sort((a,b)=>(order.includes(a.id)?order.indexOf(a.id):1e6)-(order.includes(b.id)?order.indexOf(b.id):1e6));
}
function ofmSections(source){
  if(!source || source.category!=='plugin' || !(source.id==='group:ofm'||/^our[\s-]*free[\s-]*model$/i.test(source.name)||source.providers.some(g=>g.id==='our-free-model'||g.id==='our-free-model-region')))return null;
  const sections=[{id:'free',name:'免费模型',providers:[]},{id:'eac',name:'EAC 模型',providers:[]},{id:'channels',name:'白嫖模型接入',providers:[]},{id:'aggregate',name:'聚合渠道',providers:[]}];
  for(const group of source.providers){
    const lane=group.directoryId?.split(':').at(-1);
    const section=lane==='eac'?'eac':lane==='main'?'free':lane==='kilo'?'channels':OFM_IDS.has(group.id)?'channels':'aggregate';
    sections.find(s=>s.id===section).providers.push(group);
  }
  return sections;
}
function createConfigStore(storage,key) {
  const listeners = new Set(); let error=''; let config=normalizeConfig(DEFAULT_CONFIG);
  try {const saved=key && storage?.getItem(key); if(saved) config=normalizeConfig(JSON.parse(saved));} catch(e){error='读取失败，已使用默认设置：'+e.message;}
  let snapshot={config,error};
  function publish(){snapshot={config,error};for(const listener of listeners)listener();}
  return {
    getSnapshot:()=>snapshot,
    subscribe:fn=>{listeners.add(fn);return()=>listeners.delete(fn);},
    set(next){config=normalizeConfig(next);error='';try{if(!storage||!key)throw new Error('当前环境仅内存保存');storage.setItem(key,JSON.stringify(config));}catch(e){error='设置已在本窗口生效，但未写入磁盘：'+e.message;}publish();},
    receive(value){try{config=value===null?normalizeConfig(DEFAULT_CONFIG):normalizeConfig(JSON.parse(value));error='';publish();}catch(e){error='另一窗口的配置无效：'+e.message;publish();}},
    dispose(){listeners.clear();}
  };
}
let configStore;
function useConfig(){return react.useSyncExternalStore(configStore.subscribe,configStore.getSnapshot).config;}
function SettingsPage({ctx}) {
  const snapshot=react.useSyncExternalStore(configStore.subscribe,configStore.getSnapshot);
  const config=snapshot.config;
  const catalog=ctx.modelDirectories.catalog;
  const data=react.useSyncExternalStore(fn=>catalog.store.subscribe(fn),()=>catalog.store.getSnapshot());
  const [filter,setFilter]=react.useState(''), [groupName,setGroupName]=react.useState(''), [draft,setDraft]=react.useState(''), [notice,setNotice]=react.useState('');
  const h=react.createElement;
  react.useEffect(()=>{catalog.load().catch(()=>{});},[catalog]);
  const save=next=>{try{configStore.set(next);setNotice('设置已更新。');}catch(e){setNotice(e.message);}};
  const providers=data.value?.groups ?? [];
  const sources=buildSources(providers,config,integration.ofm);
  function move(index,delta){const groups=[...config.groups];[groups[index],groups[index+delta]]=[groups[index+delta],groups[index]];save({...config,groups});}
  function remove(id){const assignments={...config.assignments};for(const key of Object.keys(assignments))if(assignments[key]===id)assignments[key]=null;save({...config,groups:config.groups.filter(g=>g.id!==id),assignments});}
  return h('section',{className:'customLists_settings','data-custom-lists-settings':''},
    h('h2',null,'自定义列表'),h('p',null,'官方/中转：来源 → 模型；插件：来源 → 渠道 → 模型。绿色前缀表示当前会话选中的模型来源，灰色表示未选中。这里只调整显示分组，不改 API、凭据或模型的真实调用路径。'),
    h('label',{className:'customLists_card'},h('input',{type:'checkbox',checked:config.enabled,onChange:e=>save({...config,enabled:e.target.checked})}),' 启用分层模型选择器（关闭立即恢复原选择器）'),
    h('p',{className:'customLists_hint'},'配置保存在当前浏览器的当前 profile 下；换浏览器或清除站点数据前请导出。 /model 命令保留官方样式。'),
    h('h3',null,'菜单预览'),h('div',{className:'customLists_card'},sources.length?sources.map(s=>h('div',{key:s.id},'【'+categoryName(s.category)+'】'+s.name+' › '+(ofmSections(s)?'四个类型 › '+s.providers.length+' 个渠道 › ':s.category==='plugin'?s.providers.length+' 个渠道 › ':'')+s.providers.reduce((n,g)=>n+g.models.length,0)+' 个模型')):h('span',null,'暂无可用模型。')),
    h('h3',null,'分组名称与顺序'),config.groups.map((group,index)=>h('div',{key:group.id,className:'customLists_card customLists_row'},
      h('input',{'aria-label':'分组名称 '+group.id,value:group.name,onChange:e=>save({...config,groups:config.groups.map(g=>g.id===group.id?{...g,name:e.target.value || '未命名'}:g)})}),
      h('select',{'aria-label':'来源类别 '+group.id,value:group.category,onChange:e=>save({...config,groups:config.groups.map(g=>g.id===group.id?{...g,category:e.target.value}:g)})},...['official','plugin','relay'].map(c=>h('option',{key:c,value:c},categoryName(c)))),
      h('button',{disabled:index===0,onClick:()=>move(index,-1),'aria-label':'上移 '+group.name},'↑'),
      h('button',{disabled:index===config.groups.length-1,onClick:()=>move(index,1),'aria-label':'下移 '+group.name},'↓'),
      h('button',{onClick:()=>remove(group.id)},'删除分组'))),
    h('form',{className:'customLists_row',onSubmit:e=>{e.preventDefault();if(!groupName.trim())return;save({...config,groups:[...config.groups,{id:'custom-'+Date.now().toString(36),name:groupName.trim()}]});setGroupName('');}},h('input',{'aria-label':'新分组名称',placeholder:'新分组名称',maxLength:100,value:groupName,onChange:e=>setGroupName(e.target.value)}),h('button',{type:'submit'},'添加分组')),
    h('h3',null,'提供商归组'),h('p',null,'Our Free Model 已知渠道默认合并。未知提供商默认独立；可在这里并入任意分组。插件类别下的提供商会显示为可点击的渠道目录，进入后才列出模型；同名模型不去重、不改路由。'),
    h('div',{className:'customLists_row'},h('input',{type:'search',placeholder:'搜索提供商名称或 ID','aria-label':'搜索提供商',value:filter,onChange:e=>setFilter(e.target.value)}),h('button',{onClick:()=>{catalog.refresh();setNotice('已请求刷新模型目录。');}},'刷新目录')),
    (data.error || snapshot.error) && h('p',{role:'alert',className:'customLists_problem'},data.error || snapshot.error),
    providers.filter(g=>(g.id+' '+g.name).toLowerCase().includes(filter.toLowerCase())).map(group=>h('label',{className:'customLists_card customLists_row',key:group.id},
      h('span',{className:'customLists_identity'},h('strong',null,group.id==='deepseek-account'?'DeepSeek 账号':group.name),h('code',null,group.id)),
      h('select',{'aria-label':'归组 '+group.id,value:Object.hasOwn(config.assignments,group.id)?config.assignments[group.id]??'__independent__':'__auto__',onChange:e=>{const assignments={...config.assignments};if(e.target.value==='__auto__')delete assignments[group.id];else assignments[group.id]=e.target.value==='__independent__'?null:e.target.value;save({...config,assignments});}},h('option',{value:'__auto__'},'自动（按已知来源）'),h('option',{value:'__independent__'},'独立显示'),...config.groups.map(g=>h('option',{value:g.id,key:g.id},g.name))))),
    !integration.ofm && h('p',{className:'customLists_hint'},'未确认 Our Free Model 已安装：不会自动合并渠道，可手动归组。'),
    h('h3',null,'备份与恢复'),h('div',{className:'customLists_row'},h('button',{onClick:()=>{setDraft(JSON.stringify(config,null,2));setNotice('已生成配置文本，可复制到安全位置。');}},'导出配置'),h('button',{onClick:()=>{try{save(normalizeConfig(JSON.parse(draft)));}catch(e){setNotice('导入失败：'+e.message);}}},'导入文本'),h('button',{onClick:()=>{if(window.confirm('恢复默认显示分组？不会删除模型或账号。'))save(DEFAULT_CONFIG);}},'恢复默认')),
    h('textarea',{'aria-label':'导入导出配置',placeholder:'点击导出，或粘贴配置 JSON 后点击导入',rows:7,value:draft,onChange:e=>setDraft(e.target.value)}),
    h('p',{role:'status','aria-live':'polite'},notice),h('p',{className:'customLists_hint'},'自定义列表 1.2.1 · 仅界面分组 · 停用或卸载后恢复内置选择器。'));
}
const extraCSS=`
.customLists_settings{max-width:820px;color:var(--dsw-alias-label-primary);padding:4px 0 24px;font-size:14px;line-height:1.6}
.customLists_settings h2{font-size:20px}.customLists_settings h3{margin-top:28px;font-size:15px}
.customLists_settings input:not([type=checkbox]),.customLists_settings select,.customLists_settings textarea{box-sizing:border-box;color:var(--dsw-alias-label-primary);background:var(--dsw-alias-bg-layer-1);border:1px solid var(--dsw-alias-border-l3);border-radius:8px;padding:8px;font:inherit;min-width:0}
.customLists_settings textarea{width:100%;margin-top:12px;font-family:monospace}.customLists_settings button{color:var(--dsw-alias-label-primary);background:var(--dsw-alias-interactive-bg-hover);border:1px solid var(--dsw-alias-border-l3);border-radius:8px;padding:6px 12px;cursor:pointer;font:inherit}.customLists_settings button:disabled{opacity:.4;cursor:default}
.customLists_card{display:block;border:1px solid var(--dsw-alias-border-l3);border-radius:12px;margin:8px 0;padding:12px}.customLists_row{display:flex;align-items:center;gap:8px;flex-wrap:wrap}.customLists_row input:not([type=checkbox]){flex:1}.customLists_identity{flex:1;display:flex;flex-direction:column}.customLists_identity code,.customLists_hint{color:var(--dsw-alias-label-tertiary);font-size:12px}.customLists_problem{color:var(--dsw-alias-state-error-primary)}
.customLists_badge{font-size:11px;white-space:nowrap;color:#858b94;flex:none}.customLists_badge[data-active="true"]{color:#168a4c;font-weight:600}\n.customLists_menu{width:330px;max-height:min(440px,100vh - 96px)}.customLists_groups{overscroll-behavior:contain}.customLists_cellLabel{overflow:hidden;text-overflow:ellipsis;max-width:240px}.customLists_cell:focus-visible,.customLists_settings button:focus-visible{outline:2px solid var(--dsw-alias-state-business-primary)}
`;
let lastPickerError='';
class PickerBoundary extends react.Component {
  constructor(props){super(props);this.state={error:null,attempt:0};}
  static getDerivedStateFromError(error){return {error};}
  componentDidCatch(error,info){lastPickerError=String(error?.stack??error);console.error('[自定义列表] 模型选择器异常',error,info);}
  render(){
    if(this.state.error)return react.createElement('div',{role:'alert',style:{fontSize:12,maxWidth:500}},
      '自定义列表异常：'+String(this.state.error?.message??this.state.error),
      react.createElement('button',{type:'button',onClick:()=>{lastPickerError='';this.setState(s=>({error:null,attempt:s.attempt+1}));}},'重试模型列表'));
    if(this.props.injectionError)return react.createElement('span',{role:'alert'},'自定义列表会话错误：'+this.props.injectionError);
    return react.createElement(ModelSelect,{...this.props,key:this.state.attempt});
  }
}
function apply(ctx) {
  const NS='customLists';
  ctx.effect(()=>ctx.locale.register(NS,{zh,en}),'custom-lists: locales');
  let storage;try{storage=window.localStorage;}catch{}
  const key=integration.profile?'dsh:custom-lists:v1:'+integration.profile:null;
  configStore=createConfigStore(storage,key);
  ctx.effect(()=>{
    const style=document.createElement('style');style.dataset.plugin='dsh-custom-lists';style.textContent=css+'\n'+extraCSS;document.head.appendChild(style);
    const onStorage=event=>{if(event.key===key)configStore.receive(event.newValue);};window.addEventListener('storage',onStorage);
    return()=>{window.removeEventListener('storage',onStorage);style.remove();document.querySelectorAll('style[data-plugin-css^="dsh-custom-lists/"]').forEach(tag=>tag.remove());configStore.dispose();};
  },'custom-lists: lifecycle');
  ctx.inject(['slots','modelDirectories','sessions','remote','remote.session'],scope=>{
    const models=scope.modelDirectories;
    scope.slots.inject('conversation.input.model',()=>{
      let release=null;
      const sync=()=>{if(configStore.getSnapshot().config.enabled && !release)release=scope.slots.register({
      name:'conversation.input.model',priority:-10,locale:NS,
      inject:sessionId=>{
        try {
          const directory=models.directoryFor(sessionId);const available=scope.sessions.subagentAddress(sessionId)===undefined;
          return {available,directory:directory.store,load:()=>{if(available)directory.load().catch(()=>{});},refresh:()=>{if(available)models.catalog.refresh();},select:selection=>available?directory.select(selection):Promise.resolve(undefined)};
        } catch(error){lastPickerError=String(error?.stack??error);console.error('[自定义列表] 会话注入异常',error);return {injectionError:String(error?.message??error)};}
      }
    },PickerBoundary);
      else if(!configStore.getSnapshot().config.enabled && release){release();release=null;}};
      sync();const unsubscribe=configStore.subscribe(sync);
      return()=>{unsubscribe();if(release)release();};
    });
    scope.slots.inject('settings.section',()=>scope.slots.register({name:'settings.section',id:'custom-lists',order:36,label:'自定义列表'},props=>react.createElement(SettingsPage,{...props,ctx:scope})));
  });
}
module.exports={name:'custom-lists',inject:['slots','locale','sessions','remote','remote.session'],apply};
// Pure helpers are also exported for deterministic regression tests.
Object.assign(module.exports,{buildSources,normalizeConfig,createConfigStore,DEFAULT_CONFIG,ModelSelect,SettingsPage});
return module.exports;
}});
