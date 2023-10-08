import { App, PluginSettingTab, Setting } from 'obsidian';
import InlineEncrypterPlugin from 'main';

export interface InlineEncrypterSettings {
	ieSetting: string;
}

export const DEFAULT_SETTINGS: InlineEncrypterSettings = {
	ieSetting: 'default'
}

export class InlineEncrypterSettingTab extends PluginSettingTab {
	plugin: InlineEncrypterPlugin;

	constructor(app: App, plugin: InlineEncrypterPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();

		containerEl.empty();
		
		containerEl.createEl('h1', {text: 'Inline Encrypter settings'});
		containerEl.createEl('p', {text: 'Settings will be here later...'})

		//new Setting(containerEl)
		//	.setName('Setting #1')
		//	.setDesc('It\'s a secret')
		//	.addText(text => text
		//		.setPlaceholder('Enter your secret')
		//		.setValue(this.plugin.settings.ieSetting)
		//		.onChange(async (value) => {
		//			this.plugin.settings.ieSetting = value;
		//			await this.plugin.saveSettings();
		//		}));
	}
}
